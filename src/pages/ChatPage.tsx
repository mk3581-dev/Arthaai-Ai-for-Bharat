import { useRef, useEffect } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ArthaWelcome } from "@/components/ArthaWelcome";
import { ArthaMessage } from "@/components/ArthaMessage";
import { ArthaChatInput } from "@/components/ArthaChatInput";
import { useArthaChat } from "@/hooks/useArthaChat";

const ChatPage = () => {
  const { messages, isLoading, sendMessage, clearChat } = useArthaChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (message: string) => {
    sendMessage(message);
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader
        onNewChat={hasMessages ? clearChat : undefined}
      />
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        {!hasMessages ? (
          <ArthaWelcome onQuickAction={handleSend} />
        ) : (
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <div className="max-w-4xl mx-auto">
              {messages.map((message, index) => (
                <ArthaMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  isStreaming={isLoading && index === messages.length - 1 && message.role === "assistant"}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        <ArthaChatInput
          onSend={handleSend}
          isLoading={isLoading}
          placeholder={hasMessages ? "Continue the conversation..." : "Ask your financial question..."}
        />
      </main>
    </div>
  );
};

export default ChatPage;
