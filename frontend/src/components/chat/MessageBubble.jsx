export default function MessageBubble({ role = 'user', text = '' }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[75%] p-2 rounded ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
        {text}
      </div>
    </div>
  );
}
