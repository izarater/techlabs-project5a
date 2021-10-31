import Header from '../components/header/header';
import Main from '../components/main/main';
import InfoPills from '../components/infopills/infopills';
import Footer from '../components/footer/footer';
import WhatIs from '../components/whatis/whatis';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <WhatIs />
      <InfoPills />
      <Footer />
    </>
  );
}

export default Home;
