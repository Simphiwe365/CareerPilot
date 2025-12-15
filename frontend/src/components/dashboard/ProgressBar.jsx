export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full bg-gray-200 rounded">
      <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded" style={{ width: `${value}%` }}>{value}%</div>
    </div>
  );
}
