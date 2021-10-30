import Header from '../components/header/header';
import Main from '../components/main/main';
import InfoPills from '../components/infopills/infopills';
import Stats from '../components/stats/stats';
import WhatIs from '../components/whatis/whatis';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <WhatIs />
      <InfoPills />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
