import { Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background">
      <div className="flex items-center gap-5 px-5 py-2">
        {/* Logo & name */}
        <div className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="BASIS Peoria" className="h-10 w-10 object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-lg font-bold text-foreground">BASIS Peoria</span>
            <span className="text-sm font-medium text-muted-foreground">AP Library</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search books or classes…"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground shrink-0"
          aria-label="Toggle theme"
        >
          <Sun className="w-5 h-5 hidden dark:block" />
          <Moon className="w-5 h-5 block dark:hidden" />
        </button>
      </div>
    </header>
  );
};

export default Header;
