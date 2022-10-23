import Head from 'next/head';
import React,{useState,useEffect} from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import SensorData from '../components/dashboard/SensorData'
import Sensors from 'src/components/dashboard/Sensors';
import Analysis from '../components/Analysis/analysis';
import { getDatabase, ref, onValue} from "firebase/database";
//icons
const Dashboard = () => {
    const [response, setResponse] = useState("");
    const db = getDatabase();
    const Dataref = ref(db,'Sensors');
    var state;
    useEffect(()=>{
        onValue(Dataref,(snapshot) => {
            var data = snapshot.val();
            state = data;
            setResponse(data)
          });
        
    }, [state])  
    console.log(response)
  return(
  <div>
    <Head>
      <title>
        Dashboard | Lambda Team
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
        <Sensors rtdata = {response}></Sensors>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            {/* <Sales /> */}
            <TrafficByDevice co={response.co} glp = {response.glp} co2 = {response.quality} sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Sales></Sales>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </div>
  )
};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;

   