import React from 'react';
import { Box, Button, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import collab from "./N3C_collab.pdf";
import DownloadIcon from '@mui/icons-material/Download';
import Header from "../../components/Header";

const N3C = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Header
            title="National COVID Cohort Collective (N3C)"
            subtitle={
              <Typography variant="subtitle1" style={{ color: 'black' }}>
                The N3C offers a collection of deidentified clinical data in the United States for COVID-19 research.
                The objective of the N3C project is to turn real-world data into the knowledge needed to address COVID-19 as the pandemic evolves.
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <img
            alt="N3C Collaboration"
            width="100%"
            src={`../../assets/n3c_chart.png`}
            style={{ cursor: "pointer" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            href={collab}
            startIcon={<DownloadIcon />}
          >
            Learn more about Collaboration Projects
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default N3C;
