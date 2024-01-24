import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Geocoded from "./scenes/geocoded";
import Cdm from "./scenes/CDM";
import Sdoh from "./scenes/sdoh";
import Recover from "./scenes/recover";
import N3C from "./scenes/n3c";
import Statedeath from "./scenes/state_death";
import SdohAncil from "./scenes/sdohAncil";
import Environment from "./scenes/environment";
import Claims from "./scenes/claims";
import Census from "./scenes/census";
import ERS from "./scenes/ers";
import AllUs from "./scenes/allUs";
import Adaptable from "./scenes/adaptable";
import Preventable from "./scenes/preventable";
import Notes from "./scenes/notes";
import Genomic from "./scenes/genomic";
import Databases from "./scenes/databases";









function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geocoded" element={<Geocoded />} />
              <Route path="/CDM" element={<Cdm />} />
              <Route path="/databases" element={<Databases />} />
              <Route path="/sdoh" element={<Sdoh />} />
              <Route path="/recover" element={<Recover />} />
              <Route path="/n3c" element={<N3C />} />
              <Route path="/state_death" element={<Statedeath />} />
              <Route path="/sdohAncil" element={<SdohAncil />} />
              <Route path="/environment" element={<Environment />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/census" element={<Census />} />
              <Route path="/ers" element={<ERS />} />
              <Route path="/allUs" element={<AllUs />} />
              <Route path="/adaptable" element={<Adaptable />} />
              <Route path="/preventable" element={<Preventable />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/genomic" element={<Genomic />} />







            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
