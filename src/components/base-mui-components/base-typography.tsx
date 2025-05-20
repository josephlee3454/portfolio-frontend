import { Typography } from "@mui/material"
import type { baseTypographyTypes } from "./types"


export const BaseTypography:  React.FC<baseTypographyTypes>  = ({value, fontSize, color}) => {
    return(
        <Typography
            sx={{
                fontSize: {fontSize},
                color: color
            }}
        >
            {value}
        </Typography>
    )
}