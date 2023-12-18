import React from "react";

export type customColorMode = 'light' | 'dark';

export type ContainerType = {
  container?: boolean,
  alignItems?: string,
  justifyContent?: string,
  children: React.ReactNode
}

export interface ButtonInterface {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
  [x:string]: any;
}

export type ModalType = {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}

export type CardType = {
  children: React.ReactNode
}

export interface SelectOption {
  value: string,
  label: string
}