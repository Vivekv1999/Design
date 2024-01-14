import { Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Rnd } from 'react-rnd'

const MoveableModal = ({
  setShowMoveableModal,
  showMoveableModal
}) => {

  const closeMoveableDialog=()=>{
    setShowMoveableModal(false)
  }

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

  return (
    <Rnd
    style={style}
    minWidth={"300px"}
    minHeight={"300px"}
    default={{
      x: 0,
      y: 0,
      width: "20%",
      height: "20%"
    }}
  >
   {/* <Dialog open={showMoveableModal} maxWidth="md" style={{zIndex:"20"}} onClose={()=>{
    closeMoveableDialog()
   }}>
    <DialogTitle>All Products</DialogTitle>
    <Divider/>
    <DialogContent> */}

      All product with moveAble Dialog
      <Button onClick={()=>closeMoveableDialog()}>
        Cancel
      </Button>
      <Button>
        Save
      </Button>
    {/* </DialogContent>
    <DialogActions>
    </DialogActions>
   </Dialog> */}
   </Rnd>
  )
}

export default MoveableModal
