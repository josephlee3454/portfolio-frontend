import React from 'react';
import { NavTabPanel } from './nav/nav-tab-panel';
import { Stack } from '@mui/material';
import { BaseTypography } from '../../base-mui-components/base-typography';
import { BaseButton } from '../../base-mui-components/base-button';

export const Header: React.FC = () => {
  return (
    <header
        style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        background: '#eee',
        backgroundColor: '#0F0F0F'
        }}
    >
    <BaseTypography value={'JL'} fontSize={26} color='#ffffff'/>

    <Stack >
      <NavTabPanel />
    </Stack>

    <BaseButton name={"Message"} backgroundColor={'#323232'} color={'#ffffff'} borderRadius={16} fontSize={16} width={30} height={30} />
  </header>
    )
};
