import { motion } from "framer-motion";
import { Users, Briefcase, Bitcoin } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Common Citizen",
    points: [
      "Learns banking, UPI, and loans in local language",
      "Makes safer day-to-day financial decisions",
      "Avoids high-risk financial mistakes",
    ],
  },
  {
    icon: Briefcase,
    title: "Young Professional",
    points: [
      "Understands budgeting and personal risk",
      "Exposure to investment fundamentals",
      "Builds financial discipline early",
    ],
  },
  {
    icon: Bitcoin,
    title: "Crypto Awareness",
    points: [
      "Learns crypto risks, scams, and regulations",
      "Prevents misinformation and fraud",
      "Understands regulatory landscape",
    ],
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Use Cases</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Who Benefits from ArthaAI?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                <ul className="space-y-3">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
