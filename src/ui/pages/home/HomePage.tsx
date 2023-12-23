import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="card">
        <div className="card-header">
          <h2 className="heading">Card Title</h2>
        </div>
        <div className="card-body">
          <h2 className="sub-heading">Card Subtitle</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis eu tortor tincidunt suscipit. Duis ultricies augue non neque
            varius, ac bibendum leo cursus.
          </p>
          <div className="card-footer">
            <div className="button primary">Read More</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
