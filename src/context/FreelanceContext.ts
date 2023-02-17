import React, { createContext, useState } from "react"
import { ethers } from "ethers" // Your code here...
import { useAccount, useChainId, useContract, useSigner } from "wagmi"

import { AgreementMantleAddress, AgreementMumbaiAddress } from "../utils/constants/address"

export const FreelanceContext = createContext("")

export const FreelanceContextProvider = (props: any) => {
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false)

  const { address: account } = useAccount()

  const [labelInfo, setlabelInfo] = useState({
    formData: {
      chain: "",
      title: "",
      description: "",
      milestone: "",
      clientAddress: "",
      freelancerAddress: "",
      price: "",
    },
  })

  const setFormdata = (prop: any) => (event: { target: { value: any } }) => {
    setlabelInfo({ ...labelInfo, formData: { ...labelInfo.formData, [prop]: event.target.value } })
  }

  const steps = [
    { title: "Select Chain" },
    { title: "Escrow Details" },
    { title: "Create Agreement" },
  ]

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const createAgreement = async () => {
    let contractAddresss
    if (labelInfo.formData.chain == "mantle") {
      contractAddresss = AgreementMantleAddress
    } else if (labelInfo.formData.chain == "mumbai") {
      contractAddresss = AgreementMumbaiAddress
    }
  }
}
//       const   cAddress = labelInfo.formData.client == 'client' ?  user.attributes.ethAddress : labelInfo.formData.clientAddress;
//       const   fAddress = labelInfo.formData.freelancer == 'freelancer' ?  user.attributes.ethAddress : labelInfo.formData.freelancerAddress;

//         setLoading(true);
// const provider = new ethers.providers.Web3Provider(window.ethereum)
// await provider.send("eth_requestAccounts", [])
//         const signer = provider.getSigner();
// const agreementContract = new ethers.Contract(
//     contractAddresss,
//     AgreementContractAbi,
//     signer
// );

//         let txn;

//         try {
//             const formattedPrice = ethers.utils.parseEther(labelInfo.formData.price.toString());
//             txn = await agreementContract.agreementCreate(
//                 clientAddress,
//                 freelancerAddress,
//                 formattedPrice,
//                 labelInfo.formData.milestone.parseInt(),
//                 labelInfo.formData.title,
//                 labelInfo.formData.description
//             );
//             await txn.wait();

//             await sendNotifications({
//                 to: user.attributes.ethAddress,
//                 message: `You Create ${labelInfo.formData.title} Agreement Successfully! on ${labelInfo.formData.chain} Network`,
//             })
//             console.log(txn, "transaction");
//             toast.success("success");
// setLoading(false);
//             handleClose();
//         } catch (err) {
//             setLoading(false);
//             console.log(err);
//             toast.error("error");
//         }
//     };

//     return (
//         <FreelanceContext.Provider
//             value={{
//                 page,
//                 open,
//                 handleClickOpen,
//                 handleClose,
//                 steps,
//                 labelInfo,
//                 setFormdata,
//                 loading,
//                 createAgreement
//             }}
//         >
//             {props.children}
//         </FreelanceContext.Provider>
//     );
// };
