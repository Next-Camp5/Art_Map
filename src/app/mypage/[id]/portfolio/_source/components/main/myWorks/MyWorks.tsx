import WorkNav from './WorkNav';
import WorkList from './WorkList';
import AddWork from '../../AddWork';

const MyWorks = () => {
  return (
    <section className="px-4" aria-labelledby="works-section-title">
      <h2 id="works-section-title" className="sr-only">
        나의 작품과 전시회
      </h2>
      <WorkNav />
      <AddWork />
      <WorkList />
    </section>
  );
};

export default MyWorks;
