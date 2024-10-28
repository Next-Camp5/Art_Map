import Overview from './components/Overview';
import ActionButtons from './components/ActionButtons';

const ExhibitionOverview = () => (
  <section className="px-4 bg-transparent z-10 py-5 border-b border-gray-2">
    <h2 className="sr-only">전시 개요</h2>
    <Overview />
    <ActionButtons />
  </section>
);

export default ExhibitionOverview;
