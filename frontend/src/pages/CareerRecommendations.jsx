import Navbar from '../components/common/Navbar';
import CareerCard from '../components/career/CareerCard';

export default function CareerRecommendations() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-4">
        <CareerCard title="Frontend Developer" description="Build user interfaces and experiences." match={92} />
      </main>
    </div>
  );
}
