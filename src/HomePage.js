import Root from './routes/root';
import HomeBg from './HomeBg';
import Details from './Details';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="bg-white">
      <Root />
      <HomeBg />
      <Details />
      <Footer />
    </div>
  );
}

export default HomePage;
