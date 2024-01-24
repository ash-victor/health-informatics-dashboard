import React from 'react';
import { Box, Grid, Divider, Button, Typography, useTheme, Link } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import table2021 from "./PCORnetTable1_Aug2021.pdf"
import table2017 from "./PCORnetTable1_July2017_Public.pdf"
import pcornet_table from "./PCORnet_UNC.xlsx"

import omop_table from "./omop_tables.png"

import DownloadIcon from '@mui/icons-material/Download';


const CDM = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
  
        {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header 
        title="Common Data Models (CDM)"
          subtitle={
            <Typography variant="subtitle1" style={{ color: 'black' }}>
              NC TraCS uses common data models (CDM) to standardize how researchers recieve UNC HC patient data they need for their research projects. Below we describe CDMs that TraCS uses.
            </Typography>
          }
          />
      

      
      </Box>

      {/* Main Content */}
      <Box display="flex" alignItems="center">
        {/* Section 1 - PCORnet Description */}
        <Box flex="1">
        <Typography variant="h3" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            PCORnet
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            The National Patient-Centered Clinical Research Network (PCORNET) is a common data model with 23 tables that contains health data organized in a way that facilitates research across academic institutions. Currently, UNC is using PCORnet version 6.1. In the diagram, these are the tables in PCORnet that researchers can request for their projects. Also linked below are two recent Table 1s.
          </Typography>
          <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" href={table2017}>
              Open Table 1 (2017)
            </Button>
            <Button variant="contained" color="primary" href={table2021} sx={{ marginLeft: '10px' }}>
              Open Table 1 (2021)
            </Button>
          </Box>
        </Box>

        {/* Vertical Divider within PCORnet */}
        <Divider orientation="vertical" flexItem />

        {/* Section 2 - PCORnet Details */}
        <Box flex="1" ml={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2" fontWeight="600">
            4,543,287
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "10px 0" }}>
            unique number of UNC patients in PCORNET
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "0 0" }}>
            (October 2023 refresh)
          </Typography>

        </Box>
      </Box>

      <Box
            display="flex"
            flexDirection="column"  // Set the container's direction to column
            justifyContent="center"
            alignItems="center"
            height="100vh"  // Set the parent container's height to the full viewport height
          >

            

            <img
              alt="profile-user"
              width="95%"
              height="700vh"
              src={`../../assets/PCORnet_table.png`}
              style={{ cursor: "pointer" }}
            />

            <Button
              variant="contained"
              color="primary"
              href={pcornet_table}
              startIcon={<DownloadIcon />}
            >
              Download PCORnet Tables
            </Button>
          </Box>


      {/* Divider for OMOP Section */}
      <Divider sx={{ margin: '20px 0' }} />

             {/* OMOP Section */}
            <Box display="flex" alignItems="center">
   
        <Box flex="1">
        <Typography variant="h3" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            OMOP
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
          The Observational Medical Outcomes Partnership (OMOP) is a CDM organized to standardize clinical and observational health data. UNC currently has the OMOP version 5.3. In the diagram, these are the available tables in OMOP that researchers cam request for their projects.

          </Typography>
        </Box>

        {/* Vertical Divider within PCORnet */}
        <Divider orientation="vertical" flexItem />

        {/* Section 2 - PCORnet Details */}
        <Box flex="1" ml={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2" fontWeight="600">
          4,542,941
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "10px 0" }}>
          unique number of UNC patients in OMOP
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "0 0" }}>
            (October 2023 refresh)
          </Typography>
        </Box>
      </Box>

     
      

      
      <Box
            display="flex"
            flexDirection="column"  // Set the container's direction to column
            justifyContent="center"
            alignItems="center"
            height="100vh"  // Set the parent container's height to the full viewport height
          >

            <img
              alt="profile-user"
              width="95%"
              height="700vh"
              src={`../../assets/OMOP_CDM.png`}
              style={{ cursor: "pointer" }}
            />

          </Box>

          <Box
            display="flex"
            flexDirection="column"  // Set the container's direction to column
            justifyContent="center"
            alignItems="center"
            height="100vh"  // Set the parent container's height to the full viewport height
          >

            <img
              alt="profile-user"
              width="95%"
              height="700vh"
              src={`../../assets/omop_tables.png`}
              style={{ cursor: "pointer" }}  
              
            />

            <Button
              variant="contained"
              color="primary"
              href={omop_table}
              startIcon={<DownloadIcon />}
            >
              Download OMOP Tables
            </Button>
          </Box>

            {/* Divider for i2b2 Section */}
            <Divider sx={{ margin: '20px 0' }} />


             {/* i2b2 Section */}
            <Box display="flex" alignItems="center">
        {/* Section 1 - i2b2 Description */}
        <Box flex="1">
        <Typography variant="h3" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            i2b2@UNC
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
  i2b2@UNC links to UNC's database ans allows UNC investigators to explore and query deidentified, aggregate data. Below shows the i2b2 self-service tool. In the diagram, these are the tables in i2b2@UNC that researchers can request for their projects.
</Typography>
        </Box>

        {/* Vertical Divider within i2b2 */}
        <Divider orientation="vertical" flexItem />

        {/* Section 2 - i2b2 Details */}
        <Box flex="1" ml={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2" fontWeight="600">
          8,422,913
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "0 30px" }}>
          unique number of UNC patients in i2b2
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ margin: "0 30px" }}>
            (November 2023 refresh)
          </Typography>
        </Box>
        
      </Box>
      <Box
            display="flex"
            flexDirection="column"  // Set the container's direction to column
            justifyContent="center"
            alignItems="center"
            height="90vh"  // Set the parent container's height to the full viewport height
          >

            <img
              alt="profile-user"
              width="95%"
              height="500vh"
              src={`../../assets/User_Interface.png`}
              style={{ cursor: "pointer" }}
              
            />
          </Box>
          <Typography
  variant="h4"
  fontWeight="bold"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    textAlign: 'center', // Center text within the container
    marginBottom: '-5px',
  }}
>
  i2b2 Database
</Typography>
          <Box
            display="flex"
            flexDirection="column"  // Set the container's direction to column
            justifyContent="center"
            alignItems="center"
            height="90vh"  // Set the parent container's height to the full viewport height
            marginTop="-10px" // Adjust the margin top to compensate for reduced margin bottom in Typography

          >

            <img
              alt="profile-user"
              width="95%"
              height="500vh"
              src={`../../assets/i2b2.png`}
              style={{ cursor: "pointer" }}
              
            />
          </Box>
      </Box>
  );
};

export default CDM;
