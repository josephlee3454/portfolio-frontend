import { Card, CardContent} from "@mui/material"
import type { baseCardType } from "./types"
import { BaseTypography } from "./base-typography"
import { BaseContentTypography } from "./base-content-typography"

export const BaseCard: React.FC<baseCardType> = ({
    title,
    textContent,
    width,
    height
}) => {

    return(
        <Card
            sx={{
                height: height,
                width: width,
                borderRadius: '24px',
            }}
        >
            <CardContent>
                    <BaseTypography typographyVariant="h3" value={title} fontSize={16} color={'#000'} />
                    <BaseContentTypography value={textContent} fontSize={12} color={"#000"} typographyVariant={"body1"} />
            </CardContent>
        </Card>
    )


}