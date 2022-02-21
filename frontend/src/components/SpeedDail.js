import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        // sx={{ position: "fixed", bottom: 16, right: 16 }}
        direction="right"
        icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<AddIcon />} tooltipTitle={"Add"} />
      </SpeedDial>
    </Box>
  );
}
