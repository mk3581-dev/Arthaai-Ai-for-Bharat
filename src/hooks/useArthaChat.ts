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

    // Keep the conversation history ready for the API request
    let conversation: Message[] = [];
    setMessages((prev) => {
      conversation = [...prev, userMsg];
      return conversation;
    });

    setIsLoading(true);

    const openAIKey = import.meta.env.VITE_OPENAI_API_KEY;
    const model = import.meta.env.VITE_OPENAI_MODEL || "gpt-3.5-turbo";

    // If the OpenAI key isn't configured, fall back to the demo response.
    if (!openAIKey) {
      setTimeout(() => {
        const demoResponse: Message = {
          role: "assistant",
          content: `📋 UNDERSTANDING\nYou asked: "${input}"\n\n📊 FACTS & CONTEXT\nArthaAI is designed to provide financial education and guidance for Indian citizens. I can help with banking basics, tax queries, scam detection, investment education, and more.\n\n💡 RECOMMENDATION\nThis is a demo mode. To get full AI-powered responses, please provide a valid OpenAI API key in a .env file (VITE_OPENAI_API_KEY).\n\n✅ In the meantime, explore the homepage to learn about all ArthaAI features!`,
        };
        setMessages((prev) => [...prev, demoResponse]);
        setIsLoading(false);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: "system",
              content:
                "You are ArthaAI, a friendly financial education assistant designed to help users understand banking, taxes, investments, and fraud prevention. Provide your answers in a clear, concise, and helpful manner.",
            },
            ...conversation,
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`OpenAI responded with ${response.status}: ${errText}`);
      }

      const data = await response.json();
      const assistantText = data?.choices?.[0]?.message?.content?.trim();

      if (!assistantText) {
        throw new Error("No response from OpenAI.");
      }

      const assistantMsg: Message = { role: "assistant", content: assistantText };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("ArthaAI error", error);
      toast.error("AI request failed. Check your OpenAI key and network.");
      const errorMsg: Message = {
        role: "assistant",
        content:
          "Sorry, I couldn't reach the AI service. Please check your OpenAI API key and try again.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  }, []);

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
