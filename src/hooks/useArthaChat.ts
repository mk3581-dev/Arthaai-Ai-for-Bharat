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

    const apiUrl =
      import.meta.env.VITE_ARTHA_CHAT_URL ||
      "https://twukwwvxkzzqzneyyxvu.supabase.co/functions/v1/artha-chat";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: conversation }),
      });

      if (!response.ok) {
        const errText = await response.text();
        let message = `API responded with ${response.status}`;
        try {
          const json = JSON.parse(errText);
          message = json.error || json.message || message;
        } catch {
          // ignore
        }
        throw new Error(message);
      }

      const data = await response.json();
      const assistantText =
        data?.choices?.[0]?.message?.content?.trim() ||
        data?.answer ||
        data?.text ||
        data?.message ||
        "";

      if (!assistantText) {
        throw new Error("No response from AI.");
      }

      const assistantMsg: Message = { role: "assistant", content: assistantText };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("ArthaAI error", error);
      toast.error("AI request failed. Check your network or AI backend.");
      const errorMsg: Message = {
        role: "assistant",
        content:
          "Sorry, I couldn't reach the AI service. Please check your network and ensure the backend is running.",
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
