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
import { getDatabase, ref, onValue} from "firebase/database";
//icons

const Dashboard = () => {
  const db = getDatabase();
  const Dataref = ref(db, '/Sensors');
  onValue(Dataref, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
  });  
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
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <SensorData name = "Presión" node = "Sensors/Pressure" icon = "Air" color = "#6F38C5" units= "PSI" linearProgress = {true}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <SensorData name = "Temperatura" node = "Sensors/Temperature" color = "#ff3d00" icon = "LocalFireDepartment" units= "Celcius" linearProgress = {true}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <SensorData name = "Humedad" node = "Sensors/Humidity" color = "#87A2FB" icon = "Water" units= "Celcius"/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <SensorData name = "CO2" node = "Sensors/quality" color = "#1C6758" icon = "Park" units= "ppm" />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders /> */}
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

   