import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const FeedbackSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error("Please enter your feedback");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you for your feedback!");
  };

  return (
    <section id="feedback" className="py-20 md:py-28 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-[150px]" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Feedback</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            We'd Love Your Feedback
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto font-body text-lg">
            Help us improve ArthaAI by sharing your thoughts and suggestions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {submitted ? (
            <div className="text-center p-12 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Thank You!</h3>
              <p className="text-primary-foreground/60 font-body">Your feedback helps us build a better ArthaAI for everyone.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-primary-foreground/80 text-sm font-body mb-1.5 block">Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-primary-foreground/80 text-sm font-body mb-1.5 block">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-primary-foreground/80 text-sm font-body mb-2 block">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? "text-accent fill-accent"
                            : "text-primary-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-primary-foreground/80 text-sm font-body mb-1.5 block">Your Feedback</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you think about ArthaAI..."
                  rows={4}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-gold text-accent-foreground font-body font-semibold py-6 text-lg rounded-xl shadow-gold hover:opacity-90 transition-opacity"
              >
                Submit Feedback
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
