import React, { useContext } from 'react';
import { NavTabPanel } from './nav/nav-tab-panel';
import { Stack, useTheme } from '@mui/material';
import { BaseTypography } from '../../base-mui-components/base-typography';
import { BaseButton } from '../../base-mui-components/base-button';
import { ThemeContext } from '../../../context';

export const Header: React.FC = () => {
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);

  const backgroundColor = theme.palette.background.default;
  const textColor = theme.palette.text.primary;

  const { toggleColorMode } = themeContext ?? {};

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor,
      }}
    >
      <BaseTypography value={'JL'} fontSize={26} color={textColor} typographyVariant={'h1'} />

      <Stack>
        <NavTabPanel />
      </Stack>

      <BaseButton
        name={'Message'}
        backgroundColor={theme.palette.primary.main}
        color={theme.palette.getContrastText(theme.palette.primary.main)}
        borderRadius={16}
        fontSize={16}
        width={30}
        height={30}
        onClick={toggleColorMode}
      />
    </header>
  );
};