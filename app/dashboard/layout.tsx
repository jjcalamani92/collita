'use client';

import { Fragment, ReactNode } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
export default function Layout({ children }: { children: ReactNode }) {

  return (
    <Fragment>
      <HeaderDashboard />
      
        {children}
    </Fragment>
  );
}
