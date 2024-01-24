import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import  { useState, useEffect } from 'react';
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import Header from "../../components/Header";

import LiquorIcon from '@mui/icons-material/Liquor';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import RunCircleIcon from '@mui/icons-material/RunCircle';

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import pdf from "./SDoH_Documentation_Draft.pdf"

import Data from './sdohdata.csv';
import Papa from 'papaparse';


const Sdoh = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  const [transportationData, setTransportationData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [alcoholData, setalcoholData] = useState([]);
  const [housingData, setHousingData] = useState([]);
  const [stressData, setStressData] = useState([]);
  const [ipvData, setIPVData] = useState([]);
  const [socialData, setSocialData] = useState([]);
  const [gadData, setGADData] = useState([]);
  const [phq9Data, setPHQ9Data] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Data);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csvData = decoder.decode(result.value);
        const parsedData = Papa.parse(csvData, { header: true, skipEmptyLines: true  }).data;
        console.log('Parsed Data:', parsedData); // Log the parsed data to see its structure
        // Filter data for the "PHYSICAL" sub-category
        const physicalData = parsedData.filter(item => item.sub_category === 'PHYSICAL');
        
        console.log('Physical Data:', physicalData);

        // Filter data for the "TRANSPORTATION" sub-category
        const transportationData = parsedData.filter(item => item.sub_category === 'TRANSPORTATION');
        console.log('Transportation Data:', transportationData);

        // Filter data for the "FOOD" sub-category
        const foodData = parsedData.filter(item => item.sub_category === 'FOOD');
        console.log('Food Data:', foodData);

        // Filter data for the "ALCOHOL" sub-category
        const alcoholData = parsedData.filter(item => item.sub_category === 'ALCOHOL');
        console.log('Alcohol Data:', alcoholData);

        // Filter data for the "HOUSING" sub-category
        const housingData = parsedData.filter(item => item.sub_category === 'HOUSING');
        console.log('Housing Data:', housingData);

        // Filter data for the "STRESS" sub-category
        const stressData = parsedData.filter(item => item.sub_category === 'STRESS');
        console.log('Stress Data:', stressData);

        // Filter data for the "IPV" sub-category
        const ipvData = parsedData.filter(item => item.sub_category === 'IPV');
        console.log('Stress Data:', ipvData);

        // Filter data for the "SOCIAL" sub-category
        const socialData = parsedData.filter(item => item.sub_category === 'SOCIAL');
        console.log('Social Data:', socialData);

        // Filter data for the "GAD-7" sub-category
        const gadData = parsedData.filter(item => item.sub_category === 'GAD-7');
        console.log('GAD-7 Data:', gadData);

        // Filter data for the "PHQ-9" sub-category
        const phq9Data = parsedData.filter(item => item.sub_category === 'PHQ-9');
        console.log('PHQ-9 Data:', phq9Data);
        

        setData(physicalData);
        setTransportationData(transportationData);
        setFoodData(foodData);
        setalcoholData(alcoholData);
        setHousingData(housingData);
        setStressData(stressData);
        setIPVData(ipvData);
        setSocialData(socialData);
        setGADData(gadData);
        setPHQ9Data(phq9Data);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const chartSetting = {
    xAxis: [
      {
        label: 'number of patients answered SDoH question',
      },
    ],
    width: 500,
    height: 400,
  };
  const dataset = [
    {
      topic: "Alcohol",
      count: 382274,
    },
    {
      topic: "Financial",
      count: 386803,
    },
    {
      topic: "Food",
      count: 942127,
  
    },
    {
      topic: "Housing",
      count: 30,
  
    },
    {
      topic: "IPV",
      count: 967021,
    },
    {
      topic: "Physical Activity",
      count: 373640,
    },
    {
      topic: "Social",
      count: 283026,
    },
    {
      topic: "Stress",
      count: 163326,
    },
    {
      topic: "Transportation",
      count: 905063,
    },
  ];

  
  
  const valueFormatter = (value) => `${value} patients`;


  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
      <Typography variant="h2" fontWeight="bold">
        Social Determinants of Health
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'black' }}>
      This dashboard highlights the types of Social Determinants of Health (SDoH) that TraCS provides for investigators. 
      </Typography>
    </div>

        <Box>
        <a href={pdf}>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[100],
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


      
    
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

    
        {/* ROW 1 */}
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column" // Add this to align content vertically
          borderRadius="30px"

        >
          <Typography variant="h1" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center' }}>
            27%
            <GroupsIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
          </Typography>
          <Typography variant="h6" fontWeight="400" textAlign="center"> {/* Add textAlign to center text */}
            of patients at UNC Health answered questions about Social Determinants of Health.
          </Typography>
        </Box>

{/* ROW 2 */}
<Box gridColumn="span 12" gridRow="span 3" backgroundColor={colors.primary[400]}>
  <Box
    mt="20px"  // Slightly reduced top margin
    p="0 30px"
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
      Number of patients that answered SDoH questions in each category
    </Typography>
    <Typography
      variant="body1"
      color={colors.grey[300]}
      textAlign="center"
    >
      Total number of patients: 4,543,287
    </Typography>
  </Box>
  <Box height="345px" m="20px 0 0 10" display="flex" flexDirection="column" alignItems="center">
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'topic' }]}
      series={[{ dataKey: 'count', label: 'count', valueFormatter, color: '#619efd' }]}
      layout="horizontal"
      {...chartSetting}
    />
  </Box>
</Box>





        
        {/* PHYSICAL STATS */}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Physical Exercise 
            <RunCircleIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains two SDoH questions on physical exercise.
            </Typography>

            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="35px"
          >
            <Box m="5px">
              {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for PHYSICAL sub-category */}
              {data.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                  <Typography variant="h2" fontWeight="600">
                    {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                  </Typography>
                  <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                </div>
              ))}

          </Box>
        </Box>

      </Box>

      {/* TRANSPORTATION STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Transportation
            <DirectionsCarIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains two SDoH questions on how patients transportation access
            </Typography>

            <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="10px"
        >
          <Box m="5px">
            {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
            {transportationData.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                <Typography variant="h2" fontWeight="600">
                  {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                </Typography>
                <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
              </div>
            ))}
          </Box>
        </Box>
      </Box>


      
      {/* FOOD STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Food
            <FastfoodIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains two SDoH questions on patients access to food.
            </Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="10px"
        >
          <Box m="5px">
            {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
            {foodData.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                <Typography variant="h2" fontWeight="600">
                  {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                </Typography>
                <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
              </div>
            ))}
          </Box>
        </Box>
      </Box>

  {/* Postpartum Depression STATS */}
<Box
  gridColumn="span 4"
  gridRow="span 4"
  backgroundColor={colors.primary[400]}
  overflow="auto"
  borderRadius="30px"

>
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`4px solid ${colors.primary[500]}`}
    colors={colors.grey[100]}
    p="5px"
  >
    <div>
      <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center' }}>
        Postpartum Depression 
        <PsychologyIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
      </Typography>
      <Typography variant="h6" fontWeight="600" textAlign="center">
        There are 11 EPIC flowsheet questions about postpartum depression. 
      </Typography>
      <Typography variant="h2" fontWeight="600" textAlign="center">
      ~&nbsp;&lt; 1%
      </Typography>
      <Typography variant="h7" fontWeight="400" textAlign="center">
        UNC patients have answered at least one of the postpartum depression questions below.
      </Typography>
    </div>
  </Box>
  {mockTransactions.map((transaction, i) => (
    <Box
      key={`${transaction.txId}-${i}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid ${colors.primary[500]}`}
      p="15px"
    >
      <Box>
        <Typography
          color={colors.blueAccent[100]}
          variant="h5"
          fontWeight="600"
        >
          {transaction.txId}
        </Typography>
        <Typography color={colors.grey[100]}>
          {transaction.user}
        </Typography>
      </Box>
      <Box color={colors.grey[100]}>{transaction.date}</Box>
      {/* Removed the small blue boxes */}
    </Box>
  ))}
</Box>


        {/* ALCOHOL STATS */}
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Alcohol
            <LiquorIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
          </Typography>
              <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains three SDoH questions on alcohol that are a part of the AUDIT-C which is scored on a scale of 0-13. These are the amount of UNC patients that have answered the questions.
              </Typography>


              <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="10px"
        >
          <Box m="5px">
            {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
            {alcoholData.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                <Typography variant="h2" fontWeight="600">
                  {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                </Typography>
                <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
              </div>
            ))}
          </Box>
        </Box>
      </Box>


      

      {/* HOUSING STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Housing
            <HomeIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains three SDoH questions on housing.
            </Typography>

            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
            <Box m="5px">
              {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
              {housingData.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                  <Typography variant="h2" fontWeight="600">
                    {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                  </Typography>
                  <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                </div>
              ))}
            </Box>
          </Box>
        </Box>

      {/* STRESS STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Stress
            <SentimentDissatisfiedIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains one SDoH question on stress.
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="10px"
            >
              <Box m="5px">
                {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
                {stressData.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                    <Typography variant="h2" fontWeight="600">
                      {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                    </Typography>
                    <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                  </div>
                ))}
              </Box>
            </Box>
          </Box>

      {/* IPV STATS */}
      <Box
          gridColumn="span 4"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Intimate Partner Violence (IPV)
            <PeopleOutlineIcon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains four SDoH questions on IPV.
            </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
            <Box m="5px">
              {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
              {ipvData.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                  <Typography variant="h2" fontWeight="600">
                    {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                  </Typography>
                  <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                </div>
              ))}
            </Box>
          </Box>
        </Box>

      

      
      {/* SOCIAL STATS */}

      <Box
          gridColumn="span 4"
          gridRow="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Social Interactions
            <Diversity3Icon sx={{ fontSize: 40, marginLeft: '10px' }} />
        </Typography>
            <Typography variant="h6" fontWeight="600">
                The EPIC flowsheet contains six SDoH questions on the patient's social life. 
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="10px"
            >
              <Box m="5px">
                {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
                {socialData.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                    <Typography variant="h2" fontWeight="600">
                      {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                    </Typography>
                    <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                  </div>
                ))}
              </Box>
            </Box>
          </Box>


        {/* Patient Health Questionnaire-2 (PHQ-2) STATS */}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Patient Health Questionnaire-2 (PHQ-2)
        </Typography>
            <Typography variant="h6" fontWeight="600">
            The PHQ-2 asks about the frequency of depressed mood over the past two weeks. These are percentage of UNC patients that has answered these questions.
            </Typography>
            <Typography variant="h2" fontWeight="600" textAlign="center">
      ~&nbsp;&lt; 1%
      </Typography>


        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="35px"
          
        >

          <Box display="flex" alignItems="flex-start" justifyContent="space-between">
            <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>Little interest or pleasure in doing things</Typography>
            
          </Box>

          <Box display="flex" alignItems="flex-start" justifyContent="space-between" mt="35px">
            <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>Feeling down, depressed, or hopeless</Typography>
          </Box>

          <Box display="flex" alignItems="flex-start" justifyContent="space-between" mt="35px">
            <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>PHQ-2 Total Score </Typography>
          </Box>

        </Box>
      </Box>

      {/* Generalized Anxiety Disorder (GAD-7) STATS */}
        <Box
          gridColumn="span 4"
          gridRow="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Generalized Anxiety Disorder (GAD-7)
        </Typography>
            <Typography variant="h6" fontWeight="600">
            The Generalized Anxiety Disorder 7-item (GAD-7) is a screening tool for generalized anxiety disorder.
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="10px"
            >
              <Box m="5px">
                {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
                {gadData.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                    <Typography variant="h2" fontWeight="600">
                      {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                    </Typography>
                    <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                  </div>
                ))}
              </Box>
            </Box>
          </Box>

            {/* Patient Health Questionnaire-9 (PHQ-9) STATS */}
            <Box
          gridColumn="span 4"
          gridRow="span 8"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
          borderRadius="30px"

          
        >
        <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[300]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Patient Health Questionnaire-9 (PHQ-9)

        </Typography>
            <Typography variant="h6" fontWeight="600">
            The PHQ-9 is a questionaire measuring the severity of depression. These are percentage of UNC patients that has answered these questions.
            </Typography>


            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="10px"
            >
              <Box m="5px">
                {/* Display Numerator, Denominator, and FLO_MEAS_DISPLAY_NAME for TRANSPORTATION sub-category */}
                {phq9Data.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', margin: '0 5px' }}>
                    <Typography variant="h2" fontWeight="600">
                      {((item.Numerator / item.Denominator) * 100).toFixed(2)}%
                    </Typography>
                    <Typography variant="h6" fontWeight="400" sx={{ margin: "0 15px" }}>{item.FLO_MEAS_DISPLAY_NAME}</Typography>
                  </div>
                ))}
              </Box>
            </Box>
          </Box>

      



      </Box>
    </Box>
  );
};

export default Sdoh;
