import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Header from "../../components/Header";
import geoservice from "./GeoService.pdf";
import  { useState, useEffect } from 'react';




import { BarChart, BarSeries, ArgumentAxis, ValueAxis, Tooltip} from '@mui/x-charts/BarChart';
import Data from './RUCA.csv';
import Papa from 'papaparse';




const Geocoded = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartSetting = {
    xAxis: [
      {
        label: 'number of patient records geocoded per method',
      },
    ],
    width: 500,
    height: 400,
  };

  



  const geocode_data = [
    {
        type: "Address+City",
        matches: 54699
    },
    {
        type: "Address+NearZIP",
        matches: 124839
    },
    {
        type: "Address+ZIP Code",
        matches: 4719817
    },
    {
        type: "City",
        matches: 4327
    },
    {
        type: "ExactAddress+City",
        matches: 36137
    },
    {
        type: "ZIP Code",
        matches: 738195
    }
];

const ruca_data = [
  {
      type: "1",
      matches: 2383964
  },
  {
      type: "2",
      matches: 585282
  },
  {
      type: "3",
      matches: 54952
  },
  {
      type: "4",
      matches: 489553
  },
  {
      type: "5",
      matches: 212968
  },
  {
      type: "6",
      matches: 61498
  },
  {
      type: "7",
      matches: 105955
  },
  {
      type: "8",
      matches: 33781
  },
  {
      type: "9",
      matches: 24815
  },
  {
      type: "10",
      matches: 62253
  }
];

const adi_data = [
  {
      type: "1",
      matches: 555497
  },
  {
      type: "2",
      matches: 476217
  },
  {
      type: "3",
      matches: 447435
  },
  {
      type: "4",
      matches: 390598
  },
  {
      type: "5",
      matches: 385483
  },
  {
      type: "6",
      matches: 348099
  },
  {
      type: "7",
      matches: 398981
  },
  {
      type: "8",
      matches: 368700
  },
  {
      type: "9",
      matches: 422462
  },
  {
      type: "10",
      matches: 541525
  }
];


const svi_data = [
  {
      type: "0 - 0.1",
      matches: 355046
  },
  {
      type: "0.1 - 0.2",
      matches: 361677
  },
  {
      type: "0.2 - 0.3",
      matches: 377594
  },
  {
      type: "0.3 - 0.4",
      matches: 335422
  },
  {
      type: "0.4 - 0.5",
      matches: 393531
  },
  {
      type: "0.5 - 0.6",
      matches: 458348
  },
  {
      type: "0.6 - 0.7",
      matches: 488202
  },
  {
      type: "0.7 - 0.8",
      matches: 539550
  },
  {
      type: "0.8 - 0.9",
      matches: 466062
  },
  {
      type: "0.9 - 1",
      matches: 682006
  }
];












  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'value', headerName: 'Value', width: 150 },
    { field: 'percentage', headerName: 'Percentage', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
  ];
  
  

  
  const valueFormatter = (value) => `Code ${value}`;







  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header 
          title="GeoService"
          subtitle={
            <Typography variant="subtitle1" style={{ color: 'black' }}>
              NC TraCS offers a GeoService that provides Census demographic data, distance calculations, and derived GeoAnalytics. Patient geocode data updates quarterly in Clarity.
            </Typography>
          }
        />
         <Box sx={{ marginLeft: '20px' }}>
        <a href={geoservice}>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            View Full Documentation
          </Button>
        </a>
        </Box>
      </Box>

       {/* Geocoding Section */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={colors.blueAccent[600]}
          borderRadius="30px"
          overflow="hidden"
          height="150px"  // Adjust the height value as needed
          mb="20px"  // Adjust the margin-bottom value as needed
          sx={{
            width: '100%', // You can adjust this value to set the width
          }}
        >
          <Box
            p="30 60px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}
            >
              GeoCoding
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'black', marginBottom: '20px' }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginLeft: '40px', marginRight: '40px' }}

            >
              Geocoding is done using Maptitude. We locate addresses using a nationwide street file. Addresses are located by rating how close the address in the data is to the addresses on each street feature. Address can be matched even if the street name isn’t spelled correctly, the street type is missing, or the street address has other information such as apartment numbers.
            </Typography>
          </Box>
          
          <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
          </Box>
        </Box>
      


       {/* Geocoding Section: Bar chart*/}

      <Box 
        gridColumn="span 6" 
        gridRow="span 3" 
        backgroundColor={colors.primary[400]} 
        borderRadius="15px"
      >
        
        <Box
          mt="50px"  // Slightly reduced top margin
          p="30 80px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color={colors.grey[100]}
            mb="5px"
            textAlign="center"  // Center-align the heading
          >
            Number of patients in each valid address category
          </Typography>
          <Typography
            variant="body1"
            color={colors.grey[300]}
            textAlign="center"
          >
            Total number of patients: 4,543,287
          </Typography>
        </Box>
        <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
          <BarChart
            dataset={geocode_data}
            yAxis={[{ scaleType: 'band', dataKey: 'type' }]}
            series={[{ dataKey: 'matches', label: 'matches', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
          />
        </Box>
      </Box>

      <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          borderRadius="15px"

          p="30px" 
          >
          <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            What is the geocoding process?
            <ContactMailIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
          </Typography>

          <Typography variant="h6" fontWeight="400">
            
            The Geocoding algorithm consists of 5 steps, which are detailed below:
          
          </Typography>
            <Typography variant="h6" fontWeight="700">
              1. Preprocessing
            </Typography>
            <Typography variant="h6" fontWeight="400">
               Addresses are cleaned up to provide the best possible chance of match.
            </Typography>
            <Typography variant="h6" fontWeight="700">
              2. Obtaining the Address
            </Typography>
            <Typography variant="h6" fontWeight="400">
              There are three forms that the address can take: (1) Address and Zip Code 
              (2) Address and Nearby Zip Code (3) Address and City. The first address form is the most accurate. 
            </Typography>
            <Typography variant="h6" fontWeight="700">
              3. Obtaining Zip Code
            </Typography>
            <Typography variant="h6" fontWeight="400">
              We take the centroid of Zip Code provided. 
            </Typography>
            <Typography variant="h6" fontWeight="700">
              4. Obtaining City: Placed at City Center
            </Typography>
            <Typography variant="h6" fontWeight="400">
              Placed at City Center
            </Typography>
            <Typography variant="h6" fontWeight="700">
              5. Geotagging
            </Typography>
            <Typography variant="h6" fontWeight="400">
              We assign Census Block Groups for the addresses
            </Typography>
            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
              The chart shows the number of patients that are geocoded using the different levels of address granularity. Here we see that most geocoded information is at the highest level of granularity, Address and Zip Code.
            </Typography>



          

      </Box>


      



      {/* GeoData Section */}
      <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={colors.blueAccent[600]}
          borderRadius="30px"
          overflow="hidden"
          height="150px"  // Adjust the height value as needed
          mb="20px"  // Adjust the margin-bottom value as needed
          sx={{
            width: '100%', // You can adjust this value to set the width
          }}
        >
          <Box
            p="30 60px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}
            >
              GeoData
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'black', marginBottom: '20px' }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginLeft: '40px', marginRight: '40px' }}

            >
              GeoData is the linkable information to a given Geocode. GeoData is not at the patient
              level, but at the geographic level and ‘characterizes’ a patient with geographical
              information.
            </Typography>
          </Box>
          
          <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
          </Box>
        </Box>
        
      

    {/* GeoData Section */}

    <Box
          gridColumn="span 6"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          borderRadius="30px"
          overflow="hidden"
          height="150px"  // Adjust the height value as needed
          mb="20px"  // Adjust the margin-bottom value as needed
          sx={{
            width: '100%', // You can adjust this value to set the width
          }}
        >
          <Box
            p="30 60px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >

          <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>

              Rural-Urban Commuting Area (RUCA) codes 
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'black', marginBottom: '20px' }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginLeft: '40px', marginRight: '40px' }}

            >
              The rural-urban commuting area (RUCA) codes classify U.S. census tracts using measures of population density, urbanization, and daily commuting.
            </Typography>
          </Box>
          </Box>
    


    {/* ROW 2 */}
    <Box 
      gridColumn="span 6" 
      gridRow="span 4" 
      backgroundColor={colors.primary[400]} 
      borderRadius="15px"
    >
      <Box
        mt="50px"  // Slightly reduced top margin
        p="30 60px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color={colors.grey[100]}
          mb="5px"
          textAlign="center"  // Center-align the heading
        >
          How much many UNC patients fall under each RUCA category?
        </Typography>
        <Typography
          variant="body1"
          color={colors.grey[300]}
          textAlign="center"
        >
          Total number of UNC patients we have RUCA data about: 3419165


        </Typography>
      </Box>
      <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
       
      <div>
    </div>
        
  
    
      </Box>
  </Box>

          {/* ROW 2 */}
          <Box 
        gridColumn="span 6" 
        gridRow="span 3" 
        backgroundColor={colors.primary[400]} 
        borderRadius="15px"
      >
        <Box
          mt="50px"  // Slightly reduced top margin
          p="30 60px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color={colors.grey[100]}
            mb="5px"
            textAlign="center"  // Center-align the heading
          >
            How much many UNC patients fall under each RUCA category?
          </Typography>
          <Typography
            variant="body1"
            color={colors.grey[300]}
            textAlign="center"
          >
            Total number of UNC patients we have RUCA data about: 3419165


          </Typography>
        </Box>
        <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
        <BarChart
          dataset={ruca_data}
          yAxis={[{ scaleType: 'band', dataKey: 'type', tickLabel: 'test'}]}
          series={[{ dataKey: 'matches', label: 'matches' }]}
          
          layout="horizontal"
          {...chartSetting}

         
          />

          
  
        </Box>
    </Box>

        {/* GeoData Section */}

        <Box
          gridColumn="span 6"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          borderRadius="30px"
          overflow="hidden"
          height="150px"  // Adjust the height value as needed
          mb="20px"  // Adjust the margin-bottom value as needed
          sx={{
            width: '100%', // You can adjust this value to set the width
          }}
        >
          <Box
            p="30 60px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >

          <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>

              Area Deprivation Index (ADI)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'black', marginBottom: '20px' }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginLeft: '40px', marginRight: '40px' }}

            >
              ADI is a measure created by Health Resources & Services Administration (HRSA). This tool ranks neighborhoods by socioeconomic disadvantage in a region of interest
            (i.e., at the state or national level) based on following factors: Income, Education, Employment and Housing Quality. 
            </Typography>
          </Box>
          </Box>
    


    {/* ROW 2 */}
    <Box 
      gridColumn="span 6" 
      gridRow="span 4" 
      backgroundColor={colors.primary[400]} 
      borderRadius="15px"
    >
      <Box
        mt="50px"  // Slightly reduced top margin
        p="30 60px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color={colors.grey[100]}
          mb="5px"
          textAlign="center"  // Center-align the heading
        >
          How much many UNC patients fall under each RUCA category?
        </Typography>
        <Typography
          variant="body1"
          color={colors.grey[300]}
          textAlign="center"
        >
          Total number of UNC patients we have RUCA data about: 3419165


        </Typography>
      </Box>
      <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
       
      <div>
    </div>
        
  
    
      </Box>
  </Box>

          {/* ROW 2 */}
          <Box 
        gridColumn="span 6" 
        gridRow="span 3" 
        backgroundColor={colors.primary[400]} 
        borderRadius="15px"
      >
        <Box
          mt="50px"  // Slightly reduced top margin
          p="30 60px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color={colors.grey[100]}
            mb="5px"
            textAlign="center"  // Center-align the heading
          >
            How much many UNC patients fall under each RUCA category?
          </Typography>
          <Typography
            variant="body1"
            color={colors.grey[300]}
            textAlign="center"
          >
            Total number of UNC patients we have RUCA data about: 3419165


          </Typography>
        </Box>
        <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
        <BarChart
            dataset={adi_data}
            yAxis={[{ scaleType: 'band', dataKey: 'type' }]}
            series={[{ dataKey: 'matches', label: 'matches', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
          />

          
  
        </Box>
    </Box>


            {/* GeoData Section */}

            <Box
          gridColumn="span 6"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          borderRadius="30px"
          overflow="hidden"
          height="150px"  // Adjust the height value as needed
          mb="20px"  // Adjust the margin-bottom value as needed
          sx={{
            width: '100%', // You can adjust this value to set the width
          }}
        >
          <Box
            p="30 60px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >

          <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>


              Social Vulnerability Index (SVI)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'black', marginBottom: '20px' }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', marginLeft: '40px', marginRight: '40px' }}

            >
              ADI is a measure created by Health Resources & Services Administration (HRSA). This tool ranks neighborhoods by socioeconomic disadvantage in a region of interest
            (i.e., at the state or national level) based on following factors: Income, Education, Employment and Housing Quality. 
            </Typography>
          </Box>
          </Box>
    


    {/* ROW 2 */}
    <Box 
      gridColumn="span 6" 
      gridRow="span 4" 
      backgroundColor={colors.primary[400]} 
      borderRadius="15px"
    >
      <Box
        mt="50px"  // Slightly reduced top margin
        p="30 60px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color={colors.grey[100]}
          mb="5px"
          textAlign="center"  // Center-align the heading
        >
          How much many UNC patients fall under each RUCA category?
        </Typography>
        <Typography
          variant="body1"
          color={colors.grey[300]}
          textAlign="center"
        >
          Total number of UNC patients we have RUCA data about: 3419165


        </Typography>
      </Box>
      <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
       
      <div>
    </div>
        
  
    
      </Box>
  </Box>

          {/* ROW 2 */}
          <Box 
        gridColumn="span 6" 
        gridRow="span 3" 
        backgroundColor={colors.primary[400]} 
        borderRadius="15px"
      >
        <Box
          mt="50px"  // Slightly reduced top margin
          p="30 60px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color={colors.grey[100]}
            mb="5px"
            textAlign="center"  // Center-align the heading
          >
            How much many UNC patients fall under each RUCA category?
          </Typography>
          <Typography
            variant="body1"
            color={colors.grey[300]}
            textAlign="center"
          >
            Total number of UNC patients we have RUCA data about: 3419165


          </Typography>
        </Box>
        <Box height="340px" m="30px 0 80 20" display="flex" flexDirection="column" alignItems="center">
        <BarChart
            dataset={svi_data}
            yAxis={[{ scaleType: 'band', dataKey: 'type' }]}
            series={[{ dataKey: 'matches', label: 'matches', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
          />

          
  
        </Box>
    </Box>





      {/* GeoData Section:ADI */}
      <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          borderRadius="30px"
          p="30px" 
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Area Deprivation Index (ADI)
        </Typography>
            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            ADI is a measure created by Health Resources & Services Administration (HRSA). This tool ranks neighborhoods by socioeconomic disadvantage in a region of interest
            (i.e., at the state or national level) based on following factors: Income, Education, Employment and Housing Quality. 
            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            • ADIs national rankings range from 1 (least
            disadvantaged) to 100 (most disadvantaged)

            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            • ADIs state rankings range from 1 (least disadvantaged)to 10
              (most disadvantaged)

            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            2.6% of ADIs have suppression criteria codes instead of ranks 
              • PH – suppression due to low population
              and/or housing
              • GQ
              – suppression due to high group
              quarters population
              • GQ
              -PH
              – suppression due to both types

              • QDI

              – Questionable Data Integrity

            </Typography>

            <Box sx={{ marginLeft: '50px' }}>
            <a href={geoservice}>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                Learn more about ADI
              </Button>
            </a>
            </Box>
          

      </Box>


      {/* GeoData Section:SVI */}
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          borderRadius="30px"
          p="30px" 
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Social Vulnerability Index (SVI)
        </Typography>
            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            SVI is a measure that identifies socially vulnerable populations
            using the sociodemographic variables at
            U.S. census tract level.
            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            • Updated every 2 years based on U.S.
            Census Bureau data releases

            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            • Ranks each tract on 15 social factors and
              groups them into four related themes

            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            Each tract receives a ranking for each of
            the four themes, as well as an overall
            ranking

            </Typography>

            <Box sx={{ marginLeft: '50px' }}>
            <a href={'https://www.atsdr.cdc.gov/placeandhealth/svi/index.html'}>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                Learn more about SVI
              </Button>
            </a>
            </Box>
      </Box>

      <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          borderRadius="30px"
          p="30px" 
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[700]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            American Community Survey (ACS)
        </Typography>
            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            ADI is a measure created by Health Resources & Services Administration (HRSA). This tool ranks neighborhoods by socioeconomic disadvantage in a region of interest
            (i.e., at the state or national level) based on following factors: Income, Education, Employment and Housing Quality. 
            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            • ADIs national rankings range from 1 (least
            disadvantaged) to 100 (most disadvantaged)

            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            • ADIs state rankings range from 1 (least disadvantaged)to 10
              (most disadvantaged)

            </Typography>

            <Typography variant="h6" fontWeight="400" sx={{ marginTop: '20px' }}>
            2.6% of ADIs have suppression criteria codes instead of ranks 
              • PH – suppression due to low population
              and/or housing
              • GQ
              – suppression due to high group
              quarters population
              • GQ
              -PH
              – suppression due to both types

              • QDI

              – Questionable Data Integrity

            </Typography>

            <Box sx={{ marginLeft: '50px' }}>
            <a href={'https://www.atsdr.cdc.gov/placeandhealth/svi/index.html'}>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                Learn more about ACS
              </Button>
            </a>
            </Box>
      </Box>
  </Box>



</Box>



    
  );
};

export default Geocoded;