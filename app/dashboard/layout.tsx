
import { ReactNode } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <HeaderDashboard />
      
        <div>{children}</div>
    </>
  );
}
