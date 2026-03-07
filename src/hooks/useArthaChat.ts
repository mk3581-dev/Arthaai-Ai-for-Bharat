import { useState, useCallback } from "react";
import { toast } from "sonner";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export const useArthaChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (input: string) => {
    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Since we don't have the Supabase edge function connected,
    // provide a helpful demo response
    setTimeout(() => {
      const demoResponse: Message = {
        role: "assistant",
        content: `📋 UNDERSTANDING\nYou asked: "${input}"\n\n📊 FACTS & CONTEXT\nArthaAI is designed to provide financial education and guidance for Indian citizens. I can help with banking basics, tax queries, scam detection, investment education, and more.\n\n💡 RECOMMENDATION\nThis is a demo mode. To get full AI-powered responses, please connect your Supabase backend with the artha-chat edge function configured.\n\n✅ In the meantime, explore the homepage to learn about all ArthaAI features!`,
      };
      setMessages(prev => [...prev, demoResponse]);
      setIsLoading(false);
    }, 1500);
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
  };
};
