import Card from '../common/Card';

export default function StatsCard({ label, value }) {
  return (
    <Card>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </Card>
  );
}
