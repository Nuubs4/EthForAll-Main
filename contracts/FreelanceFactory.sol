// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Freelance.sol";

contract FreelanceContract {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Freelance[] public agreements;
    Counters.Counter private _agreementIds;

    mapping(address => Freelance[]) public agreementMap;
    mapping(address => uint256) public agreementImap;

    event CreateAgreement(
        address indexed client,
        address indexed freelancer,
        uint256 price,
        uint256 numOfMS,
        address agreementAddress,
        string  title,
        string  description
    );

    function  agreementCreate(
        address payable _client,
        address payable _freelancer,
        uint256 _price,
        uint256 _numberOfMilestones,
        string memory _title,
        string memory _description
    ) public {
        Freelance agreement = new Freelance(
            _client,
            _freelancer,
            _price,
            _numberOfMilestones,
            _title,
            _description
        );
        agreements.push(agreement);
        uint256 currentIndex = _agreementIds.current();
        address agreementAdress = agreement.agreementAddress();
        agreementImap[agreementAdress] = currentIndex;
        _agreementIds.increment();
        agreementMap[_client].push(agreement);
        agreementMap[_freelancer].push(agreement);
        emit CreateAgreement(_client, _freelancer, _price,_numberOfMilestones,agreementAdress,_title, _description);
    }

    function getAgreementByParties(address _party)
        public
        view
        returns (Freelance[] memory)
    {
        return agreementMap[_party];
    }

    function getAgreementByIndex(uint256 _index)
        public
        view
        returns (Freelance)
    {
        return agreements[_index];
    }

    function getAgreementByAddress(address _addr)
        public
        view
        returns (Freelance)
    {
        uint256 idx = agreementImap[_addr];
        return agreements[idx];
    }

    function getAllAgreements() public view returns (Freelance[] memory) {
        return agreements;
    }
}