import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContextFilter from '../context/filter.context';
import ResList from '../components/reslist/reslist';

function Discovery() {
  return (
    <>
      <Header />
      <ResList />
      <ContextFilter />
      <Footer />
    </>
  );
}

export default Discovery;
