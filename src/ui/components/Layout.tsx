import ThemeSwitch from './ThemeSwitch';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ThemeSwitch />
      <main>{children}</main>
    </>
  );
};

export default Layout;
