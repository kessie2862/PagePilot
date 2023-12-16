import Root from './routes/root';
import HomeBg from './HomeBg';
import Details from './Details';

function HomePage() {
  return (
    <div className="bg-white">
      <Root />
      <HomeBg />
      <Details />
    </div>
  );
}

export default HomePage;
