import { Typography } from "@mui/material"
import type { baseTypographyTypes } from "./types"


export const BaseContentTypography:  React.FC<baseTypographyTypes>  = ({value, fontSize, color}) => {
    return(
        <Typography
            sx={{
                fontSize: {fontSize},
                color: color,
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
            }}
        >
            {value}
        </Typography>
    )
}