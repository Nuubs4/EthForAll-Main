import React from "react"
import { useAccount } from "wagmi"

import { Chat } from "@pushprotocol/uiweb"

import { PUSH_API_KEY } from "../../../utils/constants/variables"

const ChatMSG = () => {
  const [show, setShow] = React.useState(false)
  const { address, isConnecting, isDisconnected } = useAccount()
  return (
    <>
      <Chat
        account={address as string} //user address
        supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
        apiKey={PUSH_API_KEY}
        env="staging"
      />
    </>
  )
}

export default ChatMSG
