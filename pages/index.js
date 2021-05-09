import Footer from '../components/Footer';
import Lab from '../components/Lab';
import Landing from '../components/Landing';
import Links from '../components/Links';
import Tech from '../components/Tech';

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto">
      <Landing />
      <Tech />
      <Lab />
      <Links />
      <Footer />
    </div>
  );
}
