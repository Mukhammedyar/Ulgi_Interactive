import { Download, ShareOutlined } from '@mui/icons-material';
import { Alert, Box, CardActions, CardContent, IconButton, Snackbar } from '@mui/material';
import html2canvas from 'html2canvas';
import React, { useRef, useState } from 'react'
import { handleDownload, handleShare } from '../Utils/ShareUtils';

export default function CardBox() {
  const cardRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

    const bull = (<Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •</Box>);
  
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  

  return (
  <div ref={cardRef} className='p-3'>
    <CardContent >
      <p className="text-sm text-zinc-600">Word of the Day</p>
      <p className="text-2xl poppins-normal text-zinc-800">
        be{bull}nev{bull}o{bull}lent
      </p>
      <p className="text-md mb-5 text-zinc-600 italic">adjective</p>
        <p className='text-sm'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
        </p>
    </CardContent>
    <div className="flex items-center justify-between px-3">
      <CardActions>
        <button size="small" className=' text-blue'>Learn More</button>
      </CardActions>
        <div className="flex-center">
          <IconButton aria-label="download" onClick={()=> handleDownload(cardRef)}>
            <Download sx={{ width: '25px', height: "25px", fill: "#5768FC" }} />
          </IconButton>
          <IconButton aria-label="share" onClick={() => handleShare(cardRef, setSnackbarMessage, setSnackbarOpen)}>
            <ShareOutlined sx={{ width: '22px', height: "22px", fill: "#5768FC" }} />
          </IconButton>
        </div>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
  </div>
  )
}
