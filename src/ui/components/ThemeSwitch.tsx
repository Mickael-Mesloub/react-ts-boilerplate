import ReactSwitch from 'react-switch';
import { useTheme } from '../../contexts/ThemeContext';
import useToggleIcon from './hooks/useToggleIcon';
import { FaMoon, FaSun } from 'react-icons/fa';
import './styles/theme-switch-styles.scss';

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const { uncheckedIcon, checkedIcon } = useToggleIcon({
    //TODO - Change icons here if needed
    lightIcon: <FaMoon />,
    darkIcon: <FaSun />,
  });
  return (
    <div className="theme-toggle-btn">
      <ReactSwitch
        onChange={toggleTheme}
        checked={isDarkMode}
        //TODO - Change colors here if needed
        offColor="#0d1d3e"
        onColor="#128dde"
        offHandleColor="#fff"
        onHandleColor="#fff"
        uncheckedIcon={uncheckedIcon}
        checkedIcon={checkedIcon}
      />
    </div>
  );
};

export default ThemeSwitch;
