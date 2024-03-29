import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";


import Header from "../../components/Header";


const Notes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Notes Service" subtitle="Coming Soon" />
      </Box>
      
    

    </Box>
  );
};

export default Notes;
