import React from "react"

import { Menu } from "@headlessui/react"
import { Dialog } from "@headlessui/react"

import { TransakWeb3Context } from "../../provider/Transak"

function Transak(props: any) {
  const TransakWeb3context = React.useContext(TransakWeb3Context)
  const { openTransak } = TransakWeb3context

  return (
    <div>
      <Dialog open={props.op} onClose={props.close}>
        <Dialog.Title style={{ margin: "auto" }}>
          <h2>Transak</h2>
        </Dialog.Title>
        <Dialog.Description style={{ overflowX: "hidden" }}>
          <div>
            <Menu>
              <button onClick={() => openTransak?.()}>Transak</button>
            </Menu>
          </div>
        </Dialog.Description>
      </Dialog>
    </div>
  )
}
export default Transak
