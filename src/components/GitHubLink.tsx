import { Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GitHubLink = () => (
  <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Credits"
        >
          <Users className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">Credits</DialogTitle>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
    <a
      href="https://github.com/BASIS-Peoria"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      aria-label="View source on GitHub"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </a>
  </div>
);

export default GitHubLink;
