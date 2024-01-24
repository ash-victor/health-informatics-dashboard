import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ScienceIcon from '@mui/icons-material/Science';
import ForestIcon from '@mui/icons-material/Forest';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PublicIcon from '@mui/icons-material/Public';
import NoteIcon from '@mui/icons-material/Note';
import GroupsIcon from '@mui/icons-material/Groups';
import SickIcon from '@mui/icons-material/Sick';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Diversity3Icon from '@mui/icons-material/Diversity3';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="30px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/logo_tracs.png`}
                    style={{ cursor: "pointer", objectFit: "cover" }}
                  />
                </Box>


            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 

          <Typography
              variant="h6"
              color={colors.blueAccent[800]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Clinical EHR Data
            </Typography>



            <Item
              title="Common Data Models"
              to="/CDM"
              icon={<BackupTableIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 

            <Item
              title="EHR and Clinical Databases"
              to="/databases"
              icon={<BackupTableIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Services
            </Typography>   

                        
            <Item
              title="Social Determinants of Health Services"
              to="/sdoh"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />



           
            <Item
              title="GeoService"
              to="/geocoded"
              icon={<PublicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Genomic Services"
              to="/genomic"
              icon={<ScienceIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notes Services"
              to="/notes"
              icon={<NoteIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Ancillary Data
            </Typography>
            <Item
              title="State Death Data"
              to="/state_death"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geocoded Data"
              to="/geocoded"
              icon={<PublicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="SDoH Ancillary Sources"
              to="/sdohAncil"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Environmental Data"
              to="/environment"
              icon={<ForestIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Claims"
              to="/claims"
              icon={<LocalHospitalIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Census Bureau Data"
              to="/census"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="ERS"
              to="/ers"
              icon={<SickIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Projects
            </Typography>
            <Item
              title="N3C"
              to="/n3c"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Recover"
              to="/recover"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="All of Us"
              to="/allUs"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="ADAPTABLE"
              to="/adaptable"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="PREVENTABLE"
              to="/preventable"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />

            
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
