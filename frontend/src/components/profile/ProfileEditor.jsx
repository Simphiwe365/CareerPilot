import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileEditor() {
  const [profile, setProfile] = useState({ bio: '', current_role: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch profile on mount
    axios.get('/api/users/profile')
      .then(res => {
        setProfile({
          bio: res.data.bio || '',
          current_role: res.data.current_role || ''
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.put('/api/users/profile', profile)
      .then(() => alert('Profile updated!'))
      .catch(err => console.error(err));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-3">
      <input
        name="current_role"
        className="w-full border p-2 rounded"
        placeholder="Current role"
        value={profile.current_role}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        className="w-full border p-2 rounded"
        placeholder="Bio"
        rows={4}
        value={profile.bio}
        onChange={handleChange}
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
}