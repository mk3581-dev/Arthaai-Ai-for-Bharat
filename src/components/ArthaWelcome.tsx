import { motion } from "framer-motion";
import { Shield, Lock, BookOpen, AlertTriangle, Scale, Brain } from "lucide-react";
import { ArthaQuickActions } from "./ArthaQuickActions";

interface ArthaWelcomeProps {
  onQuickAction: (prompt: string) => void;
}

const features = [
  {
    icon: Brain,
    title: "CA-Grade Reasoning",
    description: "Structured analysis with facts, risks, and compliance",
  },
  {
    icon: AlertTriangle,
    title: "Scam Detection",
    description: "Identify fraud patterns and manipulation tactics",
  },
  {
    icon: Scale,
    title: "Regulatory Guidance",
    description: "RBI, SEBI, and tax rules explained simply",
  },
  {
    icon: Lock,
    title: "Ethical Guardrails",
    description: "Never promises returns or pushes products",
  },
];

export const ArthaWelcome = ({ onQuickAction }: ArthaWelcomeProps) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-4xl mx-auto py-8 md:py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-elevated">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Welcome to ArthaAI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance font-body">
            Your elite personal AI Chartered Accountant. Ask any financial question —
            I'll analyze it with the care and precision of a top-tier CA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                className="bg-card rounded-xl p-4 border shadow-soft text-center"
              >
                <Icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                <h3 className="font-medium text-sm text-foreground mb-1 font-body">{feature.title}</h3>
                <p className="text-xs text-muted-foreground font-body">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="font-display text-xl font-semibold text-center mb-4 text-foreground">
            How can I help you today?
          </h2>
          <ArthaQuickActions onSelect={onQuickAction} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm font-body">
            <Lock className="w-4 h-4" />
            <span>Your conversations are private and secure</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
