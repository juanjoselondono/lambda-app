import { Doughnut } from 'react-chartjs-2';
import { Box, Avatar, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import { useState, useEffect } from 'react';
import Icons from '../hooks/icons'
import { getDatabase, ref, onValue} from "firebase/database";

export const TrafficByDevice = (props) => {
  const theme = useTheme();
  const [label, setLabel] = useState("");
  const Icono =  Icons("Mood")  // not the name should start with capital letter in case you use reactjs
  const Bad = Icons("Warning")
  const Neutral = Icons("SentimentNeutral")
  const Good = Icons("SentimentSatisfied")
  const response = {
    quality :props.co2
  }
  const co2Percentage = props.co2/100000
  const glpPercentage = props.glp/100000
  const coPercentage = props.co/100000
  useEffect(()=>{
    if(response.quality < 600){
      setLabel(
      <div>
        <Typography
        color="textSecundary"
        variant="h5"
        sx = {{textAlign:'center', justifyContent:'center'}}
        >Calidad del aire excelente 
        </Typography>
        <Typography sx = {{textAlign:'center', justifyContent:'center'}}><Icono></Icono></Typography>
        <br></br>
        <Typography
        color="textSecundary"
        variant="h7"
        >Puede respirar tranquilamente y disfrutar de un aire puro.
        </Typography>
      </div>
      )
    }
    else if(response.quality >600 && response.quality < 1000){
      setLabel(
        <div>
          <Typography
          color="textSecundary"
          variant="h5"
          >Calidad del aire aceptable 
          </Typography>
          <br></br>
          <Typography sx = {{textAlign:'center', justifyContent:'center'}}><Good></Good></Typography>
          <Typography
            color="textSecundary"
            variant="h7"
            >
        </Typography>
        </div>

      )
    }
    else if(response.quality >1000 && response.quality < 1500){
      setLabel(
        <div>
        <Typography
        color="textSecundary"
        variant="h5"
        sx = {{textAlign:'center', justifyContent:'center'}}
        >Calidad del aire mediocre 
        </Typography>
        <br></br>
          <Typography sx = {{textAlign:'center', justifyContent:'center'}}><Neutral></Neutral></Typography>
          <Typography
            color="textSecundary"
            variant="h7"
            >
              Aire contaminado. Se recomienda ventilación.
        </Typography>
      </div>
      )
    }
    else if(response.quality > 1500){
      setLabel(
        <div>
        <Typography
        color="textSecundary"
        variant="h5"
        >Calidad del aire pésima. Se recomienda ventilación 
        </Typography>
        <br></br>
          <Typography sx = {{textAlign:'center', justifyContent:'center'}}><Bad></Bad></Typography>
          <Typography
            color="textSecundary"
            sx = {{textAlign:'center', justifyContent:'center'}}
            variant="h7"
            >
              Aire altamente contaminado. Se recomienda ventilación y poco esfuerzo físico
        </Typography>
      </div>
      )
    }
  },[response.quality])
  const data = {
    datasets: [
      {
        data: [co2Percentage, glpPercentage, coPercentage],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Porcentaje CO2', 'Porcetaje GLP', 'Porcentaje CO']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };
  return (
    <Card {...props}>
      <CardHeader title="Analisis Calidad del aire" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            display:'flex',
            flexDirection:'row'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          /> 
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {label}
        </Box>
      </CardContent>
    </Card>
  );
};
