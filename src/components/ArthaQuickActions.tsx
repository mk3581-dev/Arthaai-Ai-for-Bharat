import { motion } from "framer-motion";
import {
  Calculator,
  ShieldAlert,
  Scale,
  PiggyBank,
  FileSearch,
  GraduationCap,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ArthaQuickActionsProps {
  onSelect: (prompt: string) => void;
}

const quickActions = [
  {
    icon: Calculator,
    label: "Decision Check",
    description: "Analyze a financial decision",
    prompt: "I'm considering a financial decision and need your help analyzing it. Please ask me clarifying questions to understand my situation better.",
    color: "text-primary",
    bgColor: "bg-primary/5 hover:bg-primary/10",
  },
  {
    icon: ShieldAlert,
    label: "Scam Check",
    description: "Analyze suspicious offers",
    prompt: "I received a financial offer that seems too good to be true. Can you help me check if it might be a scam? I'll paste the details.",
    color: "text-destructive",
    bgColor: "bg-destructive/5 hover:bg-destructive/10",
  },
  {
    icon: Scale,
    label: "Tax Query",
    description: "Income tax & compliance",
    prompt: "I have a question about income tax compliance in India. Please help me understand the rules and what applies to my situation.",
    color: "text-accent",
    bgColor: "bg-accent/10 hover:bg-accent/20",
  },
  {
    icon: PiggyBank,
    label: "Financial Audit",
    description: "Review my finances",
    prompt: "I'd like a soft financial audit to understand my financial health better. Please ask me questions about my income, expenses, savings, and debts.",
    color: "text-success",
    bgColor: "bg-success/5 hover:bg-success/10",
  },
  {
    icon: FileSearch,
    label: "Document Review",
    description: "Analyze financial documents",
    prompt: "I have a financial document (loan agreement/insurance policy/investment offer) I need help understanding. I'll describe or paste the key terms.",
    color: "text-info",
    bgColor: "bg-info/5 hover:bg-info/10",
  },
  {
    icon: GraduationCap,
    label: "Learn Concept",
    description: "Financial literacy",
    prompt: "I want to understand a financial concept better. Please explain it in simple terms with examples I can relate to.",
    color: "text-primary",
    bgColor: "bg-primary/5 hover:bg-primary/10",
  },
  {
    icon: TrendingUp,
    label: "Risk Analysis",
    description: "Evaluate investment risks",
    prompt: "I want to understand the risks involved in an investment or financial decision I'm considering. Please help me see all angles.",
    color: "text-warning",
    bgColor: "bg-warning/5 hover:bg-warning/10",
  },
  {
    icon: CreditCard,
    label: "Debt Check",
    description: "Loan & EMI analysis",
    prompt: "I need help understanding my debt situation and whether my EMI commitments are sustainable. Please guide me through an analysis.",
    color: "text-destructive",
    bgColor: "bg-destructive/5 hover:bg-destructive/10",
  },
];

export const ArthaQuickActions = ({ onSelect }: ArthaQuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
      {quickActions.map((action, index) => {
        const Icon = action.icon;
        return (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onClick={() => onSelect(action.prompt)}
            className={cn(
              "flex flex-col items-start p-4 rounded-xl border transition-all duration-200",
              "text-left group",
              action.bgColor
            )}
          >
            <Icon className={cn("w-5 h-5 mb-2", action.color)} />
            <span className="font-medium text-sm text-foreground font-body">{action.label}</span>
            <span className="text-xs text-muted-foreground mt-1 font-body">{action.description}</span>
          </motion.button>
        );
      })}
    </div>
  );
};
