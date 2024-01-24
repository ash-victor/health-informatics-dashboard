import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";


import Header from "../../components/Header";


const Preventable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Preventable" subtitle="Coming Soon" />
      </Box>

      <div style={{ display: 'grid', gridTemplateRows: '100px 100px', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', position: 'relative' }}>
  {/* Box 1 - Row 1 */}
  <div style={{ gridRow: '1 / 2', gridColumn: '1 / 3', width: '100%', height: '100px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Box 1
  </div>

  {/* Line between Box 1 and Box 2 */}
  <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '100px', backgroundColor: 'black' }}></div>

  {/* Line between Box 1 and Box 3 */}
  <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translateX(50%)', width: '20px', height: '100px', backgroundColor: 'black' }}></div>

  {/* Box 2 - Row 2 */}
  <div style={{ gridRow: '2 / 3', gridColumn: '1 / 2', width: '100%', height: '100px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Box 2
  </div>

  {/* Box 3 - Row 2 */}
  <div style={{ gridRow: '2 / 3', gridColumn: '2 / 3', width: '100%', height: '100px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Box 3
  </div>
</div>






      
    

    </Box>
  );
};

export default Preventable;
