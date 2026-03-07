import { motion } from "framer-motion";
import { BookOpen, Lock, Users, Globe, ShieldCheck } from "lucide-react";

const usps = [
  {
    icon: BookOpen,
    title: "Education First",
    description: "We prioritise education over investment. We help users decide whether to invest — not what to invest in.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "Financial learning powered by AI, without compromising user privacy.",
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    description: "Designed for absolute beginners, not active investors.",
  },
  {
    icon: Globe,
    title: "Localised",
    description: "Uses local languages, voice, and simple visuals for accessibility.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence & Safety",
    description: "Focuses on confidence and safety, not returns. Risk-free learning environment.",
  },
];

export const USPSection = () => {
  return (
    <section className="py-20 md:py-28 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-accent blur-[150px]" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">What Makes Us Different</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Our Unique Selling Points
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto font-body text-lg">
            How our idea is different from any of the other existing ideas in the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-center p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{usp.title}</h3>
                <p className="text-primary-foreground/60 font-body text-sm">{usp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
