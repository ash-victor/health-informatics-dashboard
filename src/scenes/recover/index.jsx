import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";


import Header from "../../components/Header";


const Recover = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Recover" subtitle="Coming Soon" />
      </Box>
      
    

    </Box>
  );
};

export default Recover;
