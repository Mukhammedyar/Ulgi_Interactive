import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { DownloadForOffline } from '@mui/icons-material';


export default function LiteratureCard({className,name,description,imgUrl,file}) {

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = 'Edige.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log(file);

  return (
    <Card className={className} sx={{boxShadow: 'none',border: "1px solid #ccc", bgcolor: '#FAFBFB', borderRadius: '20px'}}>
      <div className="overflow-hidden h-[280px] w-full">
        <img src={imgUrl} alt="" className='w-full h-full object-cover'/>
      </div>
      <div className="flex flex-col justify-between h-1/3">
        <CardContent sx={{padding: "10px 10px"}}>
          <p className="text-sm md:text-lg text-zinc-900 font-medium">{name}</p>
          <p className="text-xs md:text-sm  text-zinc-700">{description}</p>
        </CardContent>
        <div className='flex px-5'>
          <div className="flex-center">
            <button>Download PDF</button>
            <IconButton aria-label="add to favorites" onClick={downloadPdf}>
              <DownloadForOffline sx={{ width: '30px', height: "30px", fill: "#5768FC" }} />
            </IconButton>
          </div>
          <IconButton>
            <ShareIcon sx={{width: '30px', height: "30px", fill: "#5768FC"}} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}