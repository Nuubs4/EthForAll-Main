// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol"; 


contract Freelance{

    using SafeMath for uint256;
    address payable private _client;
    address payable private _freelancer;
    uint256 private _projectPrice;
    uint256 private _numberOfMilestones;
    uint256 private currentMilestone;
    uint256 private milestonePayment;
    string private _title;
    string private _description;
    string private _token;
    bool private _isCancelled;

    
    mapping(address => uint256) private _stakeAmount;
    mapping(address => bool) private _stakeStatus;
    mapping(address => bool) private _cancelStatus;
    
    enum ProjectState {Initiated,Active,Cancelled,Completed}
    
    ProjectState public projectState;
    address public agreementAddress;
    struct ContractStatus {
        address client;
        address freelancer;
        uint256 salePrice;
        string title;
        string description;
        string token;
        bool clientStake;
        bool clientCancel;
        bool freelancerCancel;
        ProjectState projectState;
        uint256 numberOfMilestones;
        uint256 numCompleted;
        address agreAddress;
    }

    event AgreementStateChanged(address indexed client, address indexed freelancer, ContractStatus state);
    
    constructor(
        address payable _clientAddress,
        address payable _freelancerAddress,
        uint256 _price,
        uint256 _numOfMS,
        string memory _projectTitle,
        string memory _projectDescription
    ) 
    {
     require(_clientAddress != _freelancerAddress,
        "Client Address and Freelancer Address can't be the same"); 

        _client = _clientAddress;
        _freelancer = _freelancerAddress;
        _projectPrice = _price;
        _numberOfMilestones = _numOfMS;
        _title = _projectTitle;
        _description = _projectDescription;
        _stakeAmount[_client] = _projectPrice;
        projectState= ProjectState.Initiated;
        milestonePayment = (_projectPrice.div(_numberOfMilestones));
        agreementAddress = address(this);
    }

    modifier inProjectState(ProjectState _state) {
        require(projectState == _state,"This function can't be called in this state.");
		_;
	}

    modifier bothClientFreelancer() {
    require(msg.sender == _client || msg.sender == _freelancer,"You are not the client or the freelancer of this project");
    _;
    }

    modifier onlyClient() {
        require(msg.sender == _client, "Only allow agreement client.");
        _;
    }

    modifier agreementLocked(bool _status) {
        bool agreementLockStatus = _stakeStatus[_client];
        require( agreementLockStatus == _status,"Agreement status does not permit this action.");
        _;
    }

    function stake() 
    public 
    payable 
    onlyClient 
    inProjectState(ProjectState.Initiated)
    {  
        require(!_stakeStatus[msg.sender], "Already stake the amount.");
        require(msg.value == _stakeAmount[msg.sender],"Incorrect staking amount sent.");
        _stakeStatus[msg.sender] = true;
        projectState=ProjectState.Active;
        emit AgreementStateChanged(_client, _freelancer, getStatus());
    }

    function revokeStake() 
    public  
    onlyClient 
    inProjectState(ProjectState.Cancelled)
    {
        uint256 balance = address(this).balance;
        require(_stakeStatus[msg.sender], "Nothing has been staked yet!.");
        require(balance >= _stakeAmount[msg.sender],"Not enough Matic left to withdraw.");
        (bool success, ) = (msg.sender).call{value: _stakeAmount[msg.sender]}(
            ""
        );
        require(success, "Transfer failed.");
        _stakeStatus[msg.sender] = false;
        emit AgreementStateChanged(_client, _freelancer, getStatus());
    }

    

    function payByMilestone()
    public
    onlyClient
    inProjectState(ProjectState.Active) 
    agreementLocked(true)
    {
    require(currentMilestone <= _numberOfMilestones, "Project has been completed");
    require(!_cancelStatus[_client] && !_cancelStatus[_freelancer], "Cannot pay freelancer as at least one requested cancel!");
    require(address(this).balance >= milestonePayment, "Already Paid the Entire Balance");
    
    (bool success, ) = (_freelancer).call{value: milestonePayment}(
        ""
    );
    currentMilestone++;
    if (currentMilestone == _numberOfMilestones) {
        projectState=ProjectState.Completed;
    }   
    require(success, "Transfer failed.");
    emit AgreementStateChanged(_client, _freelancer, getStatus());
    }       
    
   function PayAtOnce()
        public
        onlyClient
        inProjectState(ProjectState.Active)
        agreementLocked(true)
        {
        require(
        !_cancelStatus[_client] && !_cancelStatus[_freelancer], "Cannot confirm as at least one requested cancel!");
        
        require(address(this).balance >= _projectPrice, "Not enough Matic");
        
        (bool freelancerPaid, ) = (_freelancer).call{value: _stakeAmount[_client]}( 
            ""
        );
        require(freelancerPaid, "Transfer has failed");

        _stakeStatus[_client] = false;
        _stakeStatus[_freelancer] = false;
        projectState=ProjectState.Completed;

        emit AgreementStateChanged(_client, _freelancer, getStatus());
    }

    function cancel()
        public
        bothClientFreelancer
        inProjectState(ProjectState.Active)
        agreementLocked(true)
    {
        require(
        !_cancelStatus[msg.sender]," Already issued a cancellation request.");
        _cancelStatus[msg.sender] = true;
        if (_cancelStatus[_client] && _cancelStatus[_freelancer]) {
            require(address(this).balance >= _projectPrice - _stakeAmount[msg.sender], "Not enough  NEON.");
            (bool clientRefunded, ) = (_client).call{value: _stakeAmount[_client]}(
                ""
            );

            require(clientRefunded, "Transfer has failed");
            address payable[2] memory arrays = [_client, _freelancer];

            for (uint256 i = 0; i < arrays.length; i++) {
                _cancelStatus[arrays[i]] = false;
                _stakeStatus[arrays[i]] = false;
            }
            projectState = ProjectState.Cancelled;
        }

        emit AgreementStateChanged(_client, _freelancer, getStatus());
    }

    function revokeCancellation()
        public
        bothClientFreelancer
        inProjectState(ProjectState.Active)
        agreementLocked(true)
    {
        require(_cancelStatus[msg.sender], "Doesn't have a cancel request to revoke");
        _cancelStatus[msg.sender] = false;
        emit AgreementStateChanged(_client, _freelancer, getStatus());
    }

    function getStatus() public view returns (ContractStatus memory) {
        return
            ContractStatus(
                _client,
                _freelancer,
                _projectPrice,
                _title,
                _description,
                _token,
                _stakeStatus[_client],
                _cancelStatus[_client],
                _cancelStatus[_freelancer],
                projectState,
                _numberOfMilestones,
                currentMilestone,
                agreementAddress
            );
    }
}