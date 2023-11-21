import { ReactNode } from 'react';

export type HeaderProps = {
  title: string;
  subtitle?: string;
  slot?: ReactNode;
  menu?: ReactNode;
  backButton?: ReactNode;
};
