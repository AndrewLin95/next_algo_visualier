import Header from './Header';
import { useRouter } from 'next/router';

const SiteLayout = ({ children }: any) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/_error' && <Header />}
      {children}
    </>
  );
};

export default SiteLayout;
