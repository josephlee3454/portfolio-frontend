import { Typography } from "@mui/material"
import type { NavTabItemType } from "../types"


export const NavTabItem: React.FC<NavTabItemType> = ({ tabName }) => {
  return (
    <Typography
      sx={{
        color: "#676767",
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {tabName}
    </Typography>
  );
};