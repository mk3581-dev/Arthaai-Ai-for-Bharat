import { motion } from "framer-motion";
import { Cloud, Cpu, Mic, Database, KeyRound, Activity } from "lucide-react";

const techStack = [
  { icon: Cpu, category: "AI & ML", tech: "AWS Bedrock / SageMaker", desc: "NLU, financial education AI, simulation logic" },
  { icon: Cloud, category: "Backend", tech: "AWS Lambda", desc: "Serverless business logic, cost-efficient scaling" },
  { icon: Mic, category: "Voice Interface", tech: "Amazon Polly & Transcribe", desc: "Text-to-speech and speech-to-text for accessibility" },
  { icon: Database, category: "Storage", tech: "Encrypted Amazon S3", desc: "Secure storage for learning content" },
  { icon: KeyRound, category: "Security", tech: "AWS KMS & IAM", desc: "Encryption key management, role-based access" },
  { icon: Activity, category: "Monitoring", tech: "Amazon CloudWatch", desc: "System monitoring, logging, audit trails" },
];

export const TechSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Technologies Used
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techStack.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-xl p-6 border shadow-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{item.category}</p>
                    <p className="font-body font-semibold text-foreground text-sm">{item.tech}</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
