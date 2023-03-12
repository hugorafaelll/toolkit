import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1300px",
    height: "620px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  


function Display({product, onClose, selectedProduct}) {

    
const [open, setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose = ()=>setOpen(false)



  return (
    <div>
      <Button onClick={handleOpen}>Mais fotos</Button>
      <Modal
        product={selectedProduct}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <button onClick={onClose}>Fechar</button>
        </Box>
      </Modal>
    </div>
  )
}

export default Display