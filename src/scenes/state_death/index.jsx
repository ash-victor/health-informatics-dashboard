import React from 'react';
import { Box, Typography, useTheme, Grid,Button } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { PieChart } from '@mui/x-charts/PieChart';
import form from "./F_14_Form.doc";
import data_dictionary from "./death_linkage_results_dictionary.csv";
import pdf from "./state_death.pdf";

const Recover = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const totalDeaths = 122044;
  const knownCausesDeaths = 4385;
  const unknownCausesDeaths = totalDeaths - knownCausesDeaths;

  const pieChartData = [
    { id: 'Known Causes', value: knownCausesDeaths, label: 'Known Causes' },
    { id: 'Unknown Causes', value: unknownCausesDeaths, label: 'Unknown Causes' },
  ];

  // Calculate the total population and the number of deaths
  const totalPopulation = 4543287;
  const total = 122044;

  // Create pie chart data for total deaths
  const totalDeathsChartData = [
    { id: 'Vital Status, Deceased', value: total, label: 'Vital Status, Deceased' },
    { id: 'Vital Status, Alive', value: totalPopulation - total, label: 'Vital Status, Alive' },
  ];

  return (
    <Box m="20px 20px 100px 20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" textAlign="center">
  <Header
    title="State Death Data"
    subtitle={
      <Typography variant="subtitle1" style={{ color: 'black', maxWidth: '600px', margin: '0 auto' }}>
        We have death information from 2004 to the October 2023 refresh from PCORnet that is directly coming from the UNC healthcare system. TraCS is in the process of bringing over matched deaths from the finalized state death files starting from 2010-12/31/22. We will also have unofficial deaths from the state death files for 01/01/2023-10/01/23.
      </Typography>
    }
  />
  <Box mt={2}>
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

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <div style={{ height: '400px' }}>
            <PieChart
              series={[
                {
                  data: totalDeathsChartData,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
              ]}
              height={300}
            />
          </div>
          <Typography variant="body1" color={colors.grey[100]} sx={{ marginBottom: '20px' }}>
            Based on the October 2023 PCORnet refresh, the number of patients recorded in the UNC Health system is{' '}
            <Typography component="span" variant="body1" colors={['#52796f']} sx={{ fontWeight: 'bold' }}>
              4,543,287
            </Typography>
            . The number of patients that have died in our UNC HCS is{' '}
            <Typography component="span" variant="body1" colors={['#52796f']} sx={{ fontWeight: 'bold' }}>
              122,044
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <div style={{ height: '400px' }}>
            <PieChart
              series={[
                {
                  data: pieChartData,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
              ]}
              height={300}
            />
          </div>

          <Typography variant="body1" color={colors.grey[100]} sx={{ marginBottom: '20px', textAlign: 'center' }}>
            We have data about the cause of death for{' '}
            <Typography component="span" variant="body1" colors={['#52796f']} sx={{ fontWeight: 'bold' }}>
              4,385
            </Typography>
            {' '}
            of them.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <hr style={{ width: '100%', border: '1px solid #ccc', margin: '20px 0' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[200]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            How to request State Death Data?
          </Typography>

          <Typography variant="body1" color={colors.grey[100]}>
            The State of North Carolina requires that we report usage of State Death Data we are provided. While there is no actual 'approval' process with the state, there is a 'record-keeping' form that must be completed by the investigator and returned to the State Center for Health Statistics. The F14 form will need to be completed by the investigator and returned to Kellie Walters. Kellie will submit the form to Matt Avery, matt.avery@dhhs.nc.gov at NC DHHS.
          </Typography>
          <a href={form}>Download F-14 form</a>
        </Grid>
        <Grid item xs={12}>
          <hr style={{ width: '100%', border: '1px solid #ccc', margin: '20px 0' }} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[200]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          What is in the State Death Data files?
          </Typography>

          <Typography variant="body1" color={colors.grey[100]}>
          All of UNC patients will have death data and underlying cause of death information. The cause of death would be captured as ICD-9 or ICD-10 codes. 
          </Typography>
          <a href={data_dictionary}>Open State Death Data Dictionary</a>
        </Grid>
    
    
      </Grid>
    </Box >
  );
};

export default Recover;
