import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';
import CareerCard from '../components/career/CareerCard';

export default function CareerRecommendations() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('match'); // 'match' or 'salary'
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchCareerRecommendations();
  }, []);

  const fetchCareerRecommendations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/career/recommend`);
      setCareers(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError('Failed to load career recommendations');
      // Set mock data on error
      setCareers([
        { 
          id: 1, 
          title: 'Frontend Developer', 
          match: 92, 
          description: 'Build user interfaces and experiences.',
          salary: '$80k-$120k',
          skills: ['React', 'JavaScript', 'CSS', 'HTML', 'UI/UX'],
          experience: '2-3 years',
          jobOutlook: 'High demand',
          difficulty: 'Intermediate'
        },
        { 
          id: 2, 
          title: 'DevOps Engineer', 
          match: 85, 
          description: 'Manage infrastructure and deployment pipelines.',
          salary: '$120k-$150k',
          skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
          experience: '3-5 years',
          jobOutlook: 'Very High',
          difficulty: 'Advanced'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getSortedAndFiltered = () => {
    let filtered = careers;

    // Filter by difficulty
    if (filterDifficulty !== 'all') {
      filtered = filtered.filter(career => career.difficulty === filterDifficulty);
    }

    // Sort
    if (sortBy === 'match') {
      return filtered.sort((a, b) => b.match - a.match);
    } else if (sortBy === 'salary') {
      return filtered.sort((a, b) => {
        const salaryA = parseInt(b.salary?.replace('$', '').split('-')[1] || 0);
        const salaryB = parseInt(a.salary?.replace('$', '').split('-')[1] || 0);
        return salaryA - salaryB;
      });
    }
    return filtered;
  };

  const sortedCareers = getSortedAndFiltered();

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500 text-lg">Loading career recommendations...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Recommendations</h1>
          <p className="text-gray-600">Based on your profile and skills, here are the best career paths for you.</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
            {error} - Showing sample data
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="match">Best Match</option>
              <option value="salary">Highest Salary</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Career Cards */}
        <div className="space-y-4">
          {sortedCareers.length > 0 ? (
            sortedCareers.map((career) => (
              <CareerCard
                key={career.id}
                id={career.id}
                title={career.title}
                description={career.description}
                match={career.match}
                salary={career.salary}
                skills={career.skills}
                experience={career.experience}
                jobOutlook={career.jobOutlook}
                difficulty={career.difficulty}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No career recommendations found for selected filters.</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Next Steps</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ Review the detailed roadmap for your selected career path</li>
            <li>✓ Take the skill-gap assessment to identify learning priorities</li>
            <li>✓ Enroll in recommended courses and certifications</li>
            <li>✓ Schedule a mentoring session with industry experts</li>
          </ul>
        </div>
      </main>
    </>
  );
}
