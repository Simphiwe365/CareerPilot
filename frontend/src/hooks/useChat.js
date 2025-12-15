import { useState } from 'react';

export default function useChat() {
  const [messages, setMessages] = useState([]);
  return { messages, setMessages };
}
