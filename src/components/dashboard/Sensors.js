import { elementType } from 'prop-types'
import React from 'react'
import SensorData from './SensorData'
import {Grid } from '@mui/material';

const Sensors = (props) => {
  var datos = props.rtdata
  const constructionObject = [
    {
        value: datos.Temperature,
        name: "Temperatura",
        units: "Celcius",
        icon: "Thermostat",
        color:"#ff3d00",
        key: 1
    },
    { 
    
        value: datos.Pressure,
        name: "Presión átmosferica",
        units: "Pascales",
        icon: "Air",
        color:"#6F38C5",
        key:3
    },
    {
        value: datos.altitude,
        name: "Altitud",
        units: "metros",
        icon: "cloud",
        color: "#1C6758",
        key:4
    },
    {
        value: datos.quality,
        name: "CO2",
        units:"ppm",
        icon: "Park",
        color: "#1C6758",
        key:5
    },
    {
        value: datos.co,
        name: "CO",
        units:"ppm",
        icon: "LocalFireDepartment",
        color: "#FFC300 ",
        key:6
    },
    {
        value: datos.glp,
        name: "GLP",
        units:"ppm",
        icon: "LocalGasStation",
        color: "#2e86c1",
        key:7
    }
]
  const listItems = constructionObject.map(
    (element) => {
        return (
            <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
            key = {element.key}
            >
                <SensorData key ={element.key} data = {element.value}  name = {element.name} icon = {element.icon} color = {element.color} units = {element.units} linearProgress = {true}/>
            </Grid>
        )
    }
)
  return (
    <Grid
    container
    spacing={3}
    style = {{marginLeft:'5px'}}
    >
        {listItems}
    </Grid>

)}

export default Sensors