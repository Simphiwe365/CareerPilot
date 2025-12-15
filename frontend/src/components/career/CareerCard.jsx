import Card from '../common/Card';

export default function CareerCard({ title, description, match = 0 }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-sm text-gray-500">{match}% match</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </Card>
  );
}
