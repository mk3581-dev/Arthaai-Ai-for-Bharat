import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary py-10 border-t border-primary-foreground/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-accent" />
            </div>
            <span className="font-display text-lg font-semibold text-primary-foreground">ArthaAI</span>
          </div>
          <p className="text-primary-foreground/50 font-body text-sm text-center">
            Team HackAttack · AI for Bharat Hackathon · Powered by AWS
          </p>
          <p className="text-primary-foreground/40 font-body text-xs">
            © 2026 ArthaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
