import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ArthaChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const ArthaChatInput = ({ onSend, isLoading, placeholder }: ArthaChatInputProps) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  return (
    <div className="border-t bg-card/80 backdrop-blur-sm p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end gap-3 bg-background rounded-2xl border shadow-soft p-2">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder || "Ask your financial question..."}
            className={cn(
              "flex-1 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
              "min-h-[44px] max-h-[200px] py-3 px-4 text-base font-body",
              "placeholder:text-muted-foreground/60"
            )}
            rows={1}
            disabled={isLoading}
          />
          <Button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            size="icon"
            className={cn(
              "h-10 w-10 rounded-xl flex-shrink-0 transition-all",
              input.trim() && !isLoading
                ? "bg-primary hover:bg-primary/90 shadow-soft"
                : "bg-muted text-muted-foreground"
            )}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3 font-body">
          ArthaAI provides educational guidance only. Always consult a qualified CA for specific decisions.
        </p>
      </div>
    </div>
  );
};
