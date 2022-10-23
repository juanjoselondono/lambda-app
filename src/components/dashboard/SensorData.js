import { Avatar, Card, CardContent, Grid, Typography, Box, LinearProgress} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { getDatabase, ref, onValue} from "firebase/database";
import React,{useState,useEffect} from 'react';
import Icons from '../hooks/icons'
import {createStore, useGlobalState} from 'state-pool';

const sensorData = (props) => {
    const [response, setResponse] = useState("");
    const db = getDatabase();
    const Dataref = ref(db, props.node);
    const Icono =  Icons(props.icon)  // not the name should start with capital letter in case you use reactjs
    const color = props.color;
    const units = props.units;

    return(
    <Card>
        <CardContent>
        <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
        >
            <Grid item>
            <Typography
                color="textSecondary"
                gutterBottom
                variant="overline"
            >
                {props.name}
            </Typography>
            <Typography
                color="textPrimary"
                variant="h4"
                id={Dataref || "none"}
            >
                {props.data || "cargando"}
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="overline"
                    style={{margin:'0.5', fontSize: '0.8rem'}}
                    >
                        {units}
                </Typography>
            </Typography>
            </Grid>
            <Grid item>
            <Avatar
                sx={{
                backgroundColor: color,
                height: 56,
                width: 56
                }}
            >
                <Icono/>
            </Avatar>
            </Grid>
        </Grid>
        </CardContent>
        <Grid Item>
        </Grid>
    </Card>
    )
};
export default sensorData;