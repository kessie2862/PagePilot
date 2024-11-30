import Root from '@/components/routes/Root';
import HomeBg from '@/components/HomeBg';
import Details from '@/components/Details';

export default function Home() {
  return (
    <div className="bg-white">
      <Root />
      <HomeBg />
      <Details />
    </div>
  );
}
