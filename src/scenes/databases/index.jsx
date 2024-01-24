import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";


import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



const Databases = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const rows = [
      { location: 'APPALACHIAN', date: 'EST 9/30/2023'},
      { location: 'BLUE RIDGE VALDESE  (Day Op and ED ONLY)', date: '07/23/2022'},
      { location: 'BLUE RIDGE MORGANTOWN', date: '07/23/2022'},
      { location: 'CALDWELL', date: '06/18/2016'},
      { location: 'CHATHAM', date: '04/04/2014'},
      { location: 'HILLSBOROUGH', date: '04/04/2014'},
      { location: 'HIGH POINT REGIONAL', date: '05/20/2016-Sept 2018*'},
      { location: 'JOHNSTON', date: '05/20/2016'},
      { location: 'LENOIR', date: '05/15/2021'},
      { location: 'NASH', date: '09/22/2018'},
      { location: 'PARDEE', date: '06/18/2016'},
      { location: 'REX', date: '06/20/2014'},
      { location: 'ROCKINGHAM - Physician Billing', date: '08/01/2018'},
      { location: 'ROCKINGHAM - Hospital Data', date: '05/15/2021'},
      { location: 'SOUTHEASTERN REGIONAL MEDICAL CENTER', date: '07/23/2022'},
      { location: 'UNC', date: '04/04/2014'},
      { location: 'UNC Physician Network', date: 'Varies - Initial practices went live on 04/04/2014 and 06/20/2014. Practices continue to Go Live as they are added to UNC. '},
      { location: 'WAYNE HEALTH', date: '09/22/2018'},













    ]
  return (
    <Box m="20px">
    {/* HEADER */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header 
      title="Electronic Health Records (EHR) and Clinical Databases"

        />
    </Box>

    <Typography variant="h4" fontWeight="bold" color={colors.redAccent[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          Electronic Health Records (EHR)
          </Typography>
          <Typography variant="subtitle1" style={{ color: 'black' }}>
            UNC has two EHR systems: WebCiS and EPIC. WebCIS is a web-based clinical information system that UNC used prior to EPIC. In the table below, there are the locations that have adopted EPIC EHR and their Go Live Dates. 
          </Typography>

          <Timeline >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          04/04/2014 – Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#8B0000' }}/>
          <TimelineDot sx={{ bgcolor: '#8B0000' }}>
            <LocalHospitalIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#8B0000' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            EPIC
          </Typography>
          <Typography>UNC adopted Epic on 04/04/2014 and uses it currently</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2004 - 04/04/2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{bgcolor: '#8B0000' }}/>
          <TimelineDot>
            <LocalHospitalIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            WebCiS
          </Typography>
          <Typography>UNC used WebCiS from 2004 to 04/04/2014.</Typography>
        </TimelineContent>
      </TimelineItem>
 

    </Timeline>


{/* TABLE */}
<TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead>
      <TableRow>
        <TableCell>Location</TableCell>
        <TableCell align="right">Go Live Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.location}>
          <TableCell component="th" scope="row">
            {row.location}
          </TableCell>
          <TableCell align="right">{row.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

{/* Clinical Databases Typography */}
<Typography
  variant="h4"
  fontWeight="bold"
  color={colors.redAccent[900]}
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px', // Adjust the margin as needed
  }}
>
  Clinical Databases
</Typography>

          <Typography variant="subtitle1" style={{ color: 'black' }}>
            UNC has three clincial databases: Clarity, Caboodle, and Carolina Data Warehouse for Health (CDW-H).
          </Typography>

        {/* GRID & CHARTS */}
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >


        
        {/* PHYSICAL EXERCISE STATS */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          
        >
        <Typography variant="h5" fontWeight="bold" color={colors.redAccent[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Clarity 
        </Typography>
            <Typography variant="h6" fontWeight="600">
                Epic Clarity is a realtional database with a normalized data model. Clarity is updated every 24 hours.
            </Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="35px"
          
        >
          <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box flex="1" ml={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2" fontWeight="600">
          5,564,067
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "10px 0" }}>
          unique number of UNC patients in Clarity
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "0 0" }}>
            (November 2023 refresh)
          </Typography>
        </Box>
            
          </Box>

          
        </Box>

      </Box>

      {/* TRANSPORTATION STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          
        >
        <Typography variant="h5" fontWeight="bold" color={colors.redAccent[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Caboodle
        </Typography>
            <Typography variant="h6" fontWeight="600">
            Caboodle is a Epic Data Warehouse that integrates Epic and non-Epic data. Caboodle is a dimensional data model for ease of reporting and data exploration.
            </Typography>

      </Box>

      
      {/* CDW-H STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          
        >
        <Typography variant="h5" fontWeight="bold" color={colors.redAccent[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            CDW-H 3.0
        </Typography>
            <Typography variant="h6" fontWeight="600">
            SAP HANA views that combine data from Epic Clarity and Epic Caboodle
            </Typography>
      </Box>
      </Box>




</Box>

  );
};

export default Databases;


