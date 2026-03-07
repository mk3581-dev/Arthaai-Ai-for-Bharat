import { motion } from "framer-motion";
import { Heart, ShieldCheck, Landmark, Smartphone, Brain, Globe, Home } from "lucide-react";

const impacts = [
  { icon: Brain, text: "Empowers individuals with practical financial knowledge" },
  { icon: ShieldCheck, text: "Protects communities from financial fraud" },
  { icon: Landmark, text: "Enables better access to government financial schemes" },
  { icon: Smartphone, text: "Increases safe adoption of banking and UPI" },
  { icon: Heart, text: "Reduces financial stress through informed decisions" },
  { icon: Globe, text: "Expands awareness of public financial welfare programs" },
  { icon: Home, text: "Builds financially resilient families and communities" },
];

export const ImpactSection = () => {
  return (
    <section className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Impact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Societal & Community-Level Impact
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg italic">
            "Financially resilient families create resilient communities."
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground font-body">{impact.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
