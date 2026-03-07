import { motion } from "framer-motion";
import { Brain, AlertTriangle, Scale, Lock, BookOpen, Shield, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Personalised AI Learning",
    description: "AI analyses how you learn and suggests suitable lessons, adapting to your pace and understanding.",
  },
  {
    icon: AlertTriangle,
    title: "Scam Detection",
    description: "Identify fraud patterns, manipulation tactics, and protect yourself from financial scams.",
  },
  {
    icon: Scale,
    title: "Regulatory Guidance",
    description: "RBI, SEBI, and tax rules explained simply in your local language.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "Financial learning powered by AI, without compromising your personal data.",
  },
  {
    icon: BookOpen,
    title: "Micro-Lessons",
    description: "2-5 minute bite-sized lessons with local language and voice support.",
  },
  {
    icon: Shield,
    title: "Risk-Free Simulator",
    description: "Practice investing with virtual money — learn real outcomes without real risk.",
  },
  {
    icon: Globe,
    title: "Inclusive Design",
    description: "Supports local languages, voice input, simple visuals, and low-data environments.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Track concepts learned, not money — building confidence step by step.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            List of Features Offered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Designed to protect users even from itself. Beginner-first, privacy-safe, and accessible to all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border shadow-card hover:shadow-elevated transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
