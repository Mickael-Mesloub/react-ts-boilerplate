import './App.scss';
import theme from './ui/theme.constants';

const App = () => {
  return (
    <>
      <div>
        <p style={styles.title}>Mon super titre</p>
      </div>
    </>
  );
};

export default App;

const styles = {
  title: {
    fontFamily: theme.fontFamily.poppins,
  },
};
