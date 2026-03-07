import { motion } from "framer-motion";
import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ChatHeaderProps {
  onNewChat?: () => void;
}

export const ChatHeader = ({ onNewChat }: ChatHeaderProps) => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-xl font-semibold text-foreground">ArthaAI</span>
            <p className="text-xs text-muted-foreground">Your Personal AI Chartered Accountant</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onNewChat && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onNewChat}
              className="text-muted-foreground hover:text-foreground"
            >
              New Chat
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
};
