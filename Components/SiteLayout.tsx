import Header from './Header';

const SiteLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default SiteLayout;
