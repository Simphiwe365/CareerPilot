import Navbar from '../components/common/Navbar';
import RoadmapViewer from '../components/career/RoadmapViewer';

export default function Roadmap() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <RoadmapViewer />
      </main>
    </div>
  );
}
