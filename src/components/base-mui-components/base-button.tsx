import { Button } from "@mui/material"
import type { baseButtonTypes } from "./types"


export const BaseButton:  React.FC<baseButtonTypes>  = ({name, borderRadius, color, backgroundColor}) => {
    return(
        <Button
            sx={{
                color: color,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
        >
            {name}
        </Button>
    )
}