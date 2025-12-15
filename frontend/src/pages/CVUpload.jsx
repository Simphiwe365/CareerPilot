import Navbar from '../components/common/Navbar';
import CVUploader from '../components/cv/CVUploader';

export default function CVUpload() {
  return (
    <div>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Upload Your CV</h1>
        <CVUploader />
      </main>
    </div>
  );
}
