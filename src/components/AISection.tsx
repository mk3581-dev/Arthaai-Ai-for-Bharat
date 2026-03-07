import { motion } from "framer-motion";
import { Zap, Target, ShieldCheck, Users, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Target,
    text: "Scalable, personalised financial learning that adapts to each user's pace and understanding",
  },
  {
    icon: BarChart3,
    text: "Step-by-step guidance that simplifies complex concepts and prevents skipping financial maturity stages",
  },
  {
    icon: Zap,
    text: "Dynamic learning paths and risk-free simulations using virtual money to support informed decisions",
  },
  {
    icon: ShieldCheck,
    text: "Strong privacy protections with user-respecting, secure data practices",
  },
  {
    icon: Users,
    text: "Static content cannot adapt — AI can. Personalised guidance at scale.",
  },
];

export const AISection = () => {
  return (
    <section className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">AI Powered</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              How AI Helps?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              AI is required because it provides personalised learning based on the user's understanding and speed. 
              It analyses how users learn and suggests suitable videos and lessons, making complex financial concepts 
              easier for beginners to understand.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="font-body text-sm text-foreground font-medium">Scalable, step-by-step guidance for every learner</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Why is AI Essential?</h3>
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border shadow-soft"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-body text-sm leading-relaxed">{reason.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
