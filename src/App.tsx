import HomePage from './ui/pages/home/HomePage';
import { useTheme } from './contexts/ThemeContext';

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id={`container${isDarkMode ? '-dark' : '-light'}`}>
      <HomePage />
    </div>
  );
};

export default App;
