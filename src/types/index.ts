import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authenticationRequired?: boolean;
    getLayout?: (page: ReactElement) => ReactNode;
  };