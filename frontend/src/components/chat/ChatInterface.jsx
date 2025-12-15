export default function ChatInterface() {
  return (
    <div className="border rounded p-4 bg-white space-y-3">
      <div className="h-64 overflow-auto border p-2 bg-gray-50">Messages...</div>
      <div className="flex gap-2">
        <input className="flex-1 border p-2 rounded" placeholder="Ask your AI coach..." />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Send</button>
      </div>
    </div>
  );
}
