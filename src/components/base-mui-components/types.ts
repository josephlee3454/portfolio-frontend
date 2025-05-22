import type { TypographyVariant } from "@mui/material";

export type baseTypographyTypes = {
    value: string,
    fontSize: number,
    color: string,
    typographyVariant: TypographyVariant,
    ml?: number,
    mt?: number
};

export type baseButtonTypes = {
    name: string,
    backgroundColor: string,
    color: string,
    borderRadius: number,
    fontSize: number,
    width: number,
    height: number
    onClick?: () => void;
};



export type baseCardType = {
    title: string,
    textContent: string,
    width: number,
    height: number
 
};

export type baseImageCardType = {
    width: number,
    height: number,
    isRightContent?: boolean,
    isBottomContent?: boolean
 
};