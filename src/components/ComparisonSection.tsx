import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Shield, Lock } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Two AI Modes</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            ArthaAI & ArthaAI Pro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            ArthaAI teaches. ArthaAI Pro lets users safely explore consequences — without real financial risk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* ArthaAI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border shadow-card"
          >
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">ArthaAI</h3>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5 text-success" />
                </div>
                <span className="text-foreground">Beginner-first financial education</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5 text-success" />
                </div>
                <span className="text-foreground">Simple guidance, no personal data required</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5 text-success" />
                </div>
                <span className="text-foreground">Focused on safety and confidence building</span>
              </li>
            </ul>
          </motion.div>

          {/* ArthaAI Pro */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border-2 border-accent/30 shadow-gold relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-gold text-accent-foreground text-xs font-body font-semibold">
              PRO
            </div>
            <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">ArthaAI Pro</h3>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lock className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-foreground">Simulation-based decision support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lock className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-foreground">Virtual money, real-world outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lock className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-foreground">Encrypted, user-controlled data</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
