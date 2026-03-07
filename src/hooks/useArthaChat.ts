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
    const openAIModel = import.meta.env.VITE_OPENAI_MODEL || "gpt-3.5-turbo";
    const arthaUrl =
      import.meta.env.VITE_ARTHA_CHAT_URL ||
      "https://twukwwvxkzzqzneyyxvu.supabase.co/functions/v1/artha-chat";

    const useOpenAI = Boolean(openAIKey);
    const useBackend = !useOpenAI;
    const endpoint = useOpenAI ? "OpenAI" : "Artha backend";
    const targetUrl = useOpenAI ? "https://api.openai.com/v1/chat/completions" : arthaUrl;

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(useOpenAI ? { Authorization: `Bearer ${openAIKey}` } : {}),
        },
        body: JSON.stringify(
          useOpenAI
            ? {
                model: openAIModel,
                messages: [
                  {
                    role: "system",
                    content:
                      "You are ArthaAI, a friendly financial education assistant designed to help users understand banking, taxes, investments, and fraud prevention. Provide your answers in a clear, concise, and helpful manner.",
                  },
                  ...conversation,
                ],
                temperature: 0.7,
              }
            : { messages: conversation }
        ),
      });

      if (!response.ok) {
        const errText = await response.text();
        let message = `Response ${response.status}`;
        try {
          const json = JSON.parse(errText);
          message = json.error || json.message || message;
        } catch {
          // ignore parsing errors
        }
        throw new Error(message);
      }

      const data = await response.json();
      const assistantText =
        (useOpenAI
          ? data?.choices?.[0]?.message?.content
          : data?.choices?.[0]?.message?.content || data?.answer || data?.text || data?.message) ??
        "";

      if (!assistantText?.trim()) {
        throw new Error("No response from AI.");
      }

      const assistantMsg: Message = { role: "assistant", content: assistantText.trim() };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      const message =
        error instanceof Error
          ? `${error.message}`
          : "Unknown error when calling AI backend.";
      console.error("ArthaAI error", message);
      toast.error(`AI request failed (${endpoint}): ${message}`);
      const errorMsg: Message = {
        role: "assistant",
        content: `Sorry, I couldn't reach the AI service (${endpoint}).\n\nReason: ${message}`,
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
