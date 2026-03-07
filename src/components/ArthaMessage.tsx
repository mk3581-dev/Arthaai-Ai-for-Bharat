import { motion } from "framer-motion";
import { User, Bot, AlertTriangle, CheckCircle, TrendingUp, Shield, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

const formatMessageContent = (content: string) => {
  const sections = content.split(/(?=📋|📊|⚠️|🔍|💡|🚨|✅)/g);

  return sections.map((section, index) => {
    const trimmed = section.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("📋")) {
      return (
        <div key={index} className="mb-4">
          <div className="flex items-center gap-2 text-info font-medium mb-2">
            <Info className="w-4 h-4" />
            <span>Understanding</span>
          </div>
          <p className="text-foreground/90 pl-6">{trimmed.replace("📋 UNDERSTANDING", "").replace("📋", "").trim()}</p>
        </div>
      );
    }

    if (trimmed.startsWith("📊")) {
      return (
        <div key={index} className="mb-4">
          <div className="flex items-center gap-2 text-primary font-medium mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>Facts & Context</span>
          </div>
          <p className="text-foreground/90 pl-6">{trimmed.replace("📊 FACTS & CONTEXT", "").replace("📊", "").trim()}</p>
        </div>
      );
    }

    if (trimmed.startsWith("⚠️")) {
      return (
        <div key={index} className="mb-4 bg-warning/10 border border-warning/20 rounded-lg p-3">
          <div className="flex items-center gap-2 text-warning font-medium mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Risks & Concerns</span>
          </div>
          <p className="text-foreground/90 pl-6">{trimmed.replace("⚠️ RISKS & CONCERNS", "").replace("⚠️", "").trim()}</p>
        </div>
      );
    }

    if (trimmed.startsWith("🔍")) {
      return (
        <div key={index} className="mb-4">
          <div className="flex items-center gap-2 text-primary font-medium mb-2">
            <Shield className="w-4 h-4" />
            <span>Analysis</span>
          </div>
          <p className="text-foreground/90 pl-6 whitespace-pre-wrap">{trimmed.replace("🔍 ANALYSIS", "").replace("🔍", "").trim()}</p>
        </div>
      );
    }

    if (trimmed.startsWith("💡")) {
      return (
        <div key={index} className="mb-4 bg-success/10 border border-success/20 rounded-lg p-3">
          <div className="flex items-center gap-2 text-success font-medium mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>Recommendation</span>
          </div>
          <p className="text-foreground/90 pl-6">{trimmed.replace("💡 RECOMMENDATION", "").replace("💡", "").trim()}</p>
        </div>
      );
    }

    if (trimmed.startsWith("🚨")) {
      return (
        <div key={index} className="mb-4 bg-destructive/10 border border-destructive/20 rounded-lg p-3">
          <div className="flex items-center gap-2 text-destructive font-medium mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Alert</span>
          </div>
          <p className="text-foreground/90 pl-6">{trimmed.replace("🚨", "").trim()}</p>
        </div>
      );
    }

    if (trimmed.startsWith("✅")) {
      return (
        <div key={index} className="mb-4">
          <p className="text-foreground/90 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
            <span>{trimmed.replace("✅", "").trim()}</span>
          </p>
        </div>
      );
    }

    return (
      <p key={index} className="text-foreground/90 whitespace-pre-wrap mb-3">
        {trimmed}
      </p>
    );
  });
};

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
          {isAssistant ? formatMessageContent(content) : <p>{content}</p>}
        </div>
      </div>
    </motion.div>
  );
};
