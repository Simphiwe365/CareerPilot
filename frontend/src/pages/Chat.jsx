import Navbar from '../components/common/Navbar';
import ChatInterface from '../components/chat/ChatInterface';

export default function Chat() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ChatInterface />
      </main>
    </div>
  );
}
