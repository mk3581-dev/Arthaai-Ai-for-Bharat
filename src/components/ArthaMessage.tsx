import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export const ArthaMessage = ({ role, content, isStreaming }: ChatMessageProps) => {
  const isAssistant = role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex gap-4 p-4 md:p-6",
        isAssistant ? "bg-card" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0",
          isAssistant
            ? "bg-primary text-primary-foreground"
            : "bg-accent text-accent-foreground"
        )}
      >
        {isAssistant ? <Bot className="w-4 h-4 md:w-5 md:h-5" /> : <User className="w-4 h-4 md:w-5 md:h-5" />}
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm mb-2 text-muted-foreground font-body">
          {isAssistant ? "ArthaAI" : "You"}
        </div>
        <div className={cn("text-sm md:text-base leading-relaxed font-body", isStreaming && "typing-cursor")}>
          {isAssistant ? (
            <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-td:text-foreground/80 prose-th:text-foreground prose-th:font-semibold">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
