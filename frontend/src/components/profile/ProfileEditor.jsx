export default function ProfileEditor() {
  return (
    <div className="space-y-3">
      <input className="w-full border p-2 rounded" placeholder="Current role" />
      <textarea className="w-full border p-2 rounded" placeholder="Bio" rows={4} />
    </div>
  );
}
