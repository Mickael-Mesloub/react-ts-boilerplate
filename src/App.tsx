import { useTheme } from './contexts/ThemeContext';
import { Outlet } from '@tanstack/react-router';

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id={`container${isDarkMode ? '-dark' : '-light'}`}>
      <Outlet />
    </div>
  );
};

export default App;
