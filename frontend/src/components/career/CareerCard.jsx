import Card from '../common/Card';
import { FaStar, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa';

export default function CareerCard({ 
  id, 
  title, 
  description, 
  match = 0,
  salary,
  skills = [],
  experience,
  jobOutlook,
  difficulty
}) {
  const getMatchColor = (matchPercent) => {
    if (matchPercent >= 85) return 'text-green-600';
    if (matchPercent >= 70) return 'text-blue-600';
    return 'text-yellow-600';
  };

  const getMatchLabel = (matchPercent) => {
    if (matchPercent >= 85) return 'Excellent Match';
    if (matchPercent >= 70) return 'Good Match';
    return 'Fair Match';
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Beginner': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
          <div className={`text-right ${getMatchColor(match)}`}>
            <div className="text-3xl font-bold">{match}%</div>
            <div className="text-xs font-semibold">{getMatchLabel(match)}</div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {salary && (
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
              <FaMoneyBillWave className="text-green-600" />
              <div>
                <div className="text-xs text-gray-500">Salary</div>
                <div className="font-semibold text-gray-900">{salary}</div>
              </div>
            </div>
          )}
          {experience && (
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
              <FaClipboardList className="text-blue-600" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="font-semibold text-gray-900">{experience}</div>
              </div>
            </div>
          )}
        </div>

        {/* Job Outlook & Difficulty */}
        <div className="flex gap-2 flex-wrap">
          {jobOutlook && (
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              {jobOutlook} Demand
            </span>
          )}
          {difficulty && (
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          )}
        </div>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-gray-700 uppercase mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 border-t">
          <button className="flex-1 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded hover:bg-indigo-700 transition">
            View Roadmap
          </button>
          <button className="flex-1 px-4 py-2 border border-indigo-600 text-indigo-600 text-sm font-semibold rounded hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </Card>
  );
}
