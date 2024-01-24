import { Box, useTheme, SvgIcon } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const ArrowIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <path d="M2 12l2-2h14v4h4v-4h2l-2 2-2-2h-2V6H8v3H6l-2 2z" />
  </SvgIcon>
);

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Home - IDSci Informatics Landscape" subtitle="Coming Soon" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Clinical EHR Section */}
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          borderRadius="30px"
          position="relative"
        >
          {/* Add square box */}
          <Box
            width="80px"
            height="80px"
            backgroundColor="white"
            borderRadius="10px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />

          {/* Add arrow */}
          <Box
            position="absolute"
            top="50%"
            left="calc(100% + 10px)"  // Adjust the distance between the square and the arrow
            transform="translate(-50%, -50%)"
          >
            <ArrowIcon />
          </Box>

          {/* Add circle */}
          <Box
            width="50px"
            height="50px"
            backgroundColor="white"
            borderRadius="50%"
            position="absolute"
            top="50%"
            left="calc(100% + 50px)"  // Adjust the distance between the arrow and the circle
            transform="translate(-50%, -50%)"
          />
        </Box>

        {/* Ancillary Data Section */}
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          borderRadius="30px"
        >
          {/* ADD INFO */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
