import Card from '../../components/cards/Card';
import { useTheme } from '../../../contexts/ThemeContext';
import Layout from '../../components/Layout';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <Card
        isDarkMode={isDarkMode}
        cardTitle={'Card title'}
        cardSubtitle={'Card subtitle'}
        cardContent={'Card content'}
        hasButton={true}
        buttonTitle={'Read more'}
      />
    </Layout>
  );
};

export default HomePage;
