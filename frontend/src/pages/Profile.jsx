import Navbar from '../components/common/Navbar';
import ProfileEditor from '../components/profile/ProfileEditor';
import SkillSelector from '../components/profile/SkillSelector';

export default function Profile() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <ProfileEditor />
        <SkillSelector />
      </main>
    </div>
  );
}
