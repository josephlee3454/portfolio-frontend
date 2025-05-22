import { Card, CardContent, Stack } from "@mui/material";
import type { baseImageCardType } from "./types";
import profilePic from './base-profile-pic.webp'; 
import { BaseTypography } from "./base-typography";

export const BaseImageCard: React.FC<baseImageCardType> = ({
  width,
  height,
  isRightContent,
  isBottomContent,
}) => {
  // Determine flexDirection based on props
  const flexDirection = isBottomContent ? 'column' : 'row';

  return (
    <Card
      sx={{
        height: height,
        width: width,
        borderRadius: '24px',

      }}
    >
      <CardContent>
        <Stack sx={{ display: 'flex', flexDirection }}>
          <img 
            src={profilePic} 
            alt="Downloadable" 
            style={{ width: '200px', height: 'auto', borderRadius: '16px' }} 
          />

          {isRightContent && (
            <BaseTypography
              value="Right side content here"
              fontSize={14}
              color="#676767"
              typographyVariant="body2"
              ml={5}
            />
            )}

          {isBottomContent && (
            <BaseTypography
              value="Bottom side content here"
              fontSize={14}
              color="#676767"
              typographyVariant="body2"
              mt={3}
            />
            )}
        </Stack>
      </CardContent>
    </Card>
  );
};