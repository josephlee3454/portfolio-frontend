import { Box, Grid, Paper, Stack, styled } from "@mui/material"
import { BaseImageCard } from "../../../base-mui-components/base-image-card";
import { BaseCard, BaseTypography } from "../../../base-mui-components";



export const HomeGrid = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 4, md: 7 }}>
                    <BaseImageCard width={550} height={256} isRightContent={true}/>
                </Grid>
                <Grid size={{ xs: 5, md: 5 }}>
                    <Box>
                        <BaseTypography 
                            value={"scrolling feature list goes here "} 
                            fontSize={16} 
                            color={"#000"} 
                            typographyVariant={"h1"}
                            
                             />
                        <Stack display={'flex'} flexDirection={'row'} mt={5} >
                            <BaseImageCard width={200} height={200} isBottomContent={true}/>
                            <BaseImageCard width={200} height={200} isBottomContent={true}/>
                        </Stack>
                    </Box>
                </Grid>
                <Grid size={{ xs: 3, md: 3 }}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 3, md: 3 }}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 10, md: 12 }}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}