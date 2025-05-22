import { Container } from "@mui/material";
import { HomeGrid } from "../grid/home-grid/home-grid";

export const Home: React.FC = () => {

    return(
        <Container sx={{
            height: '800px',
            width: '1000px',
        }}>
            <HomeGrid />
          
        </Container>
    )
};