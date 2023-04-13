import React from 'react'
import './Prod.css'
import Button from '@mui/material/Button'; 
import { styled} from '@mui/material/styles';
import vape1 from '../Img/vape1.png';

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import juice from '../Img/juice.jpg';
import device from '../Img/device.jpg';
import access from '../Img/accesories.jpg';
import starter from '../Img/starter.jpg';
import Footer from '../footer/Footer';
const Btn = styled('Button')`
  color: black;
  background-color: aqua;
  fontWeight: 500;
  height:50px;
  width:200px;
  border-radius:6px;

`
const Btnn = styled('Button')`
  color: black;
  background-color: aqua;
  fontWeight: 500;
  height:50px;
  width:120px;
  border-radius:6px;
  margin-left:40px;
  

`

const Prod = () => {
  
  return (
    <>
    <div className='mainprod'>
    <div className='myprod'>
      <div className='subsec1'>
      <h3>Our Product</h3>
      <h1>SEE OUR BEST<br></br> PRODUCT</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud <br></br> exercitation ullamco laboris nisi ut aliquip <br></br> ex ea commodo consequat.</p>
      <Btn variant="contained">OUR PRODUCT</Btn>
      </div>
<div className='prod1'>

    <img src={vape1}/>
    <h3 style={{color:'white'}}>JEG Mod Battery</h3>
    <h2 style={{color:'aqua'}}>$199</h2>
    <Btnn variant='contained'>BUY NOW</Btnn>
</div>

<Box sx = {{ width: "40%" , marginTop: 8, marginLeft:10, marginRight:10 }}>
            <h3 style={{color: 'aqua'}}>Battery</h3>
            <LinearProgress variant="determinate" value={95} />
            <h3 style={{color: 'aqua'}}>Firing Button</h3>
            <LinearProgress variant="determinate" value={80} />
            <h3 style={{color: 'aqua'}}>Air Flow Control</h3>
            <LinearProgress variant="determinate" value={90} />
            <h3 style={{color: 'aqua'}}>Safety Features</h3>
            <LinearProgress variant="determinate" value={95} />
            <h3 style={{color: 'aqua'}}>Coil Build Up</h3>
            <LinearProgress variant="determinate" value={95} />
         </Box>
    </div>
    <div className='myprod2'>
      <h1>Categories</h1>
    <h2>PRODUCT SELECTION</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div className='vapecard' >
    <Card sx={{ maxWidth: 300, height:600 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={juice}
        title="green iguana"
      />
      <CardContent style={{backgroundColor: "gray"}}>
        <Typography gutterBottom variant="h5" component="div" style={{color: "white"}}>
          E-Juices
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: "gray"}}>
        <Button size="small"  style={{color: "aqua"}}>Share</Button>
        <Button size="small"  style={{color: "aqua"}}>Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 300,height: 600 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={device}
        title="green iguana"
      />
      <CardContent style={{backgroundColor: "gray"}}>
        <Typography gutterBottom variant="h5" component="div" style={{color: "white"}}>
          Devices
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: "gray"}}>
        <Button size="small" style={{color: "aqua"}}>Share</Button>
        <Button size="small" style={{color: "aqua"}}>Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 300,height: 600  }}>
      <CardMedia
        sx={{ height: 400 }}
        image={access}
        title="green iguana"
      />
      <CardContent  style={{backgroundColor: "gray"}}>
        <Typography gutterBottom variant="h5" component="div" style={{color: "white"}} >
        Accessories
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions   style={{backgroundColor: "gray"}}>
        <Button size="small" style={{color: "aqua"}}>Share</Button>
        <Button size="small" style={{color: "aqua"}}>Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 300,height: 600,  }}>
      <CardMedia
        sx={{ height: 400 }}
        image={starter}
        title="green iguana"
      />
      <CardContent style={{backgroundColor: "gray"}}>
        <Typography gutterBottom variant="h5" component="div" style={{color: "white"}}>
          Starter Kit
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: "gray"}}>
        <Button size="small"  style={{color: "aqua"}}>Share</Button>
        <Button size="small"  style={{color: "aqua"}}>Learn More</Button>
      </CardActions>
    </Card>
   
    </div>
 
    </div>
    </>
  )
}

export default Prod