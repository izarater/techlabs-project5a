import Header from '../components/header/header';
import Main from '../components/main/main';
import InfoPills from '../components/infopills/infopills';
import Footer from '../components/footer/footer';
import Restaurant from '../components/restaurant/restaurant';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Restaurant />
      <InfoPills />
      <Footer />
    </>
  );
}

export default Home;
