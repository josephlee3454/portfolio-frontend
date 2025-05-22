import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NavTabItemType } from "../types";

export const NavTabItem: React.FC<NavTabItemType> = ({ tabName }) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        color: theme.palette.text.primary,
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": {
          color: theme.palette.secondary.main,
        },
      }}
    >
      {tabName}
    </Typography>
  );
};