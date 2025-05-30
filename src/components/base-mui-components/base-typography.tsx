import { Typography } from "@mui/material"
import type { baseTypographyTypes } from "./types"


export const BaseTypography:  React.FC<baseTypographyTypes>  = ({
    value, 
    fontSize, 
    color,
    typographyVariant,
    ml,
    mt
}) => {
    return(
        <Typography
            sx={{
                fontSize: {fontSize},
                color: color,
                ml: ml,
                mt: mt
            }}
            variant={typographyVariant}
        >
            {value}
        </Typography>
    )
}