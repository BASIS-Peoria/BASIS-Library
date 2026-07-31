import { useState } from "react";
import { Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type AboutTab = "credits" | "belief";

const GitHubLink = () => {
  const [tab, setTab] = useState<AboutTab>("credits");

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog
        onOpenChange={(open) => {
          if (open) setTab("credits");
        }}
      >
        <DialogTrigger asChild>
          <button
            className="p-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="About"
          >
            <Users className="w-5 h-5" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="sr-only">About</DialogTitle>
          </DialogHeader>

          <div className="flex gap-1 p-1 rounded-lg bg-muted">
            <button
              type="button"
              onClick={() => setTab("credits")}
              className={cn(
                "flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                tab === "credits"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Credits
            </button>
            <button
              type="button"
              onClick={() => setTab("belief")}
              className={cn(
                "flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                tab === "belief"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Our Belief
            </button>
          </div>

          {tab === "credits" ? (
            <div className="space-y-6 pt-2">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Contributors</h3>
                <div className="mx-3 mb-2 border-t border-border" />
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Lucas Z</li>
                  <li>Justin N</li>
                  <li>Anish K</li>
                  <li>Richard B</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Student Contributors</h3>
                <div className="mx-3 mb-2 border-t border-border" />
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Hong-Tam L</li>
                  <li>Krystal N</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground text-center pt-2">Thank you for all your help! ❤️</p>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Education and knowledge ought to be free. Access to learning materials should never be gated by cost,
                circumstance, or convenience. This project exists because we believe every student deserves unrestricted
                access to the resources that help them learn, grow, and succeed, regardless of background or means.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If a textbook can help a student understand the world a little better, nothing should stand between them
                and that knowledge.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GitHubLink;
