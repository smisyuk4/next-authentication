import { AuthHeader } from '@/components/auth-header';
import '../globals.css';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function authLayout({ children }) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
