import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { DownloadForOffline } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LiteratureCard({className}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={className} sx={{boxShadow: 'none',border: "1px solid #ccc", bgcolor: '#FAFBFB', borderRadius: '20px'}}>
      <CardMedia
        component="img"
        height="194"
        image="../../public/162_04.jpg"
        alt="Paella dish"
        />
      <CardContent sx={{padding: "10px 10px"}}>
        <p className="text-sm md:text-lg text-zinc-900 font-medium">Shrimp and Chorizo Paella</p>
        <p className="text-xs md:text-sm  text-zinc-700">September 14, 2016</p>
      </CardContent>
      <CardContent sx={{padding: "5px 10px"}}>
        <p className='text-xs md:text-sm'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. 
        </p>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <DownloadForOffline sx={{width: '30px', height: "30px", fill: "#5768FC"}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{width: '30px', height: "30px", fill: "#5768FC"}} />
        </IconButton>
      </CardActions>
    </Card>
  );
}