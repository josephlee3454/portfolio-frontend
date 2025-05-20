import { Stack } from "@mui/material"
import { NavTabItem } from "./nav-tab-item"



export const NavTabPanel: React.FC = () => {

    return(
        <Stack 
            direction="row" 
            spacing={2} 
            sx={{
            alignItems: 'center', 
            }}
        >
            <NavTabItem tabName={'Home'} />
            <NavTabItem tabName={'About'} />
            <NavTabItem tabName={'Work'} />
            <NavTabItem tabName={'Contact'} />
        </Stack>

    )
}