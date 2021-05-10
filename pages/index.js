import dynamic from 'next/dynamic';

import Footer from '../components/Footer';
import Lab from '../components/Lab';
import Landing from '../components/Landing';
import Links from '../components/Links';
import Tech from '../components/Tech';
import Header from '../components/Header';
import useScreen from '../hooks/useScreen';

const Navigation = dynamic(() => import('../components/Navigation'), {
  ssr: false,
});

export default function Home() {
  const { desktop } = useScreen();

  return (
    <>
      {desktop ? <Header /> : <Navigation />}

      <div className="container max-w-6xl mx-auto">
        <Landing />
        <Tech />
        <Lab />
        <Links />
        <Footer />
      </div>
    </>
  );
}
