import * as React from 'react';
import { useState, useEffect } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const analysis = (props) => {
  const [label, setLabel] = useState("");

  useEffect(()=>{
    if(props.data.quality < 600){
      setLabel(
      <Typography
      color="textPrimary"
      variant="h6"
      >Calidad del aire excelente
      </Typography>
      )
    }
    else if(props.data.quality >600 && props.data.quality < 1000){
      setLabel(
      <Typography
      color="textPrimary"
      variant="h6"
      >Calidad del aire aceptable 
      </Typography>
      )
    }
    else if(props.data.quality >1000 && props.data.quality < 1500){
      setLabel(
      <Typography
      color="textPrimary"
      variant="h6"
      >Calidad del aire mediocre 
      </Typography>
      )
    }
    else if(props.data.quality > 1500){
      setLabel(
      <Typography
      color="textPrimary"
      variant="h6"
      >Calidad del aire pésima. Se recomienda ventilación 
      </Typography>
      )
    }
  })
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', width:'100%'}}>
        <div style={{display:'flex',marginTop:'2%',flexDirection:'column', justifyContent:'center', alignContent:'center', width:'100%'}}>
            <Box sx={{ position: 'relative', display: 'inline-block', textAlign:'center'}}>
            <CircularProgress style={{ color: "green"}}  size = "40%"variant="determinate" {...props} />           
            <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf:'center',
                alignSelf:'center'
            }}
            >
            <div style = {{display:'flex', flexDirection:'column'}}>
            {label}
            <Typography
                color="textPrimary"
                variant="h1"
            >{`${Math.round(props.value)}`}</Typography>
            </div>
            </Box>
            </Box>
    </div>

  </div>
  )
}

export default analysis