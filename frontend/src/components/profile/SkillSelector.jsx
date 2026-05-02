import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SkillSelector() {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('/api/users/profile')
      .then(res => setSkills(res.data.skills || []))
      .catch(err => console.error(err));
  }, []);

  const addSkill = () => {
    if (!input) return;
    const updatedSkills = [...skills, input];
    setSkills(updatedSkills);
    axios.put('/api/users/profile', { skills: updatedSkills })
      .then(() => setInput(''))
      .catch(err => console.error(err));
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    axios.put('/api/users/profile', { skills: updatedSkills })
      .catch(err => console.error(err));
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="Add a skill"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={addSkill}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between border p-2 rounded">
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}