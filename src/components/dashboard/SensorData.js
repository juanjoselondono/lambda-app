import { Avatar, Card, CardContent, Grid, Typography, Box, LinearProgress} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { getDatabase, ref, onValue} from "firebase/database";
import React,{useState,useEffect} from 'react';
import Icons from '../hooks/icons'
import {createStore, useGlobalState} from 'state-pool';

const store = createStore();  // Create a store for storing our global state
store.setState("count", 0);

const sensorData = (props) => {
    const [response, setResponse] = useState("");
    const db = getDatabase();
    const Dataref = ref(db, props.node);
    const Icono =  Icons(props.icon)  // not the name should start with capital letter in case you use reactjs
    const color = props.color;
    const units = props.units;
    
    const showLinearProgress = props.linearProgress || false; 
    useEffect(()=>{
        onValue(Dataref, (snapshot) => {
            const data = snapshot.val();
            setResponse(data)
          });
        
    })  
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
            >
                {response}
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="overline"
                    style={{margin:'1rem', fontSize: '0.8rem'}}
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
        <Grid Item>
            {
                showLinearProgress == true &&
                <div>
                    <Box sx={{ pt: 3, color:  'blue'}}>
                        <LinearProgress
                        value={response}
                        variant="determinate"
                        />
                    </Box>
                </div>
            }
            </Grid>
        </CardContent>
        <Grid Item>
        </Grid>
    </Card>
    )
};
export default sensorData;