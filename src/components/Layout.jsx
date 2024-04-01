import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';

export const Layout = ({children}) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
