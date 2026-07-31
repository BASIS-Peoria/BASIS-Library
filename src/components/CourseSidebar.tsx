import { useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Menu, ExternalLink, X } from "lucide-react";
import { courseGroups } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (label: string | null) => void;
}

const MIN_WIDTH = 44;
const DEFAULT_WIDTH = 220;
const MAX_WIDTH = 360;

const CourseSidebar = ({ selectedCategory, onSelectCategory }: CourseSidebarProps) => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dragging = useRef(false);
  const prevWidth = useRef(DEFAULT_WIDTH);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    const startX = e.clientX;
    const startW = width;

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const newW = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH + 1, startW + ev.clientX - startX));
      setWidth(newW);
      prevWidth.current = newW;
      setCollapsed(newW <= MIN_WIDTH + 10);
    };

    const onMouseUp = () => {
      dragging.current = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [width]);

  const toggleCollapse = () => {
    if (collapsed) {
      setCollapsed(false);
      setWidth(prevWidth.current < DEFAULT_WIDTH ? DEFAULT_WIDTH : prevWidth.current);
    } else {
      prevWidth.current = width;
      setCollapsed(true);
      setWidth(MIN_WIDTH);
    }
  };

  const handleSelect = (cat: string | null) => {
    onSelectCategory(cat);
    setMobileOpen(false);
  };

  const effectiveWidth = collapsed ? MIN_WIDTH : width;

  const navItems = (
    <>
      <button
        onClick={() => handleSelect(null)}
        className={cn(
          "w-full flex items-center px-4 py-2.5 text-sm font-medium transition-colors",
          selectedCategory === null
            ? "bg-accent text-accent-foreground"
            : "text-sidebar-foreground hover:bg-sidebar-accent"
        )}
      >
        <span className="truncate">All Categories</span>
      </button>
      <div className="mx-3 my-1 border-t border-border" />
      {courseGroups.map((group) => (
        <button
          key={group.label}
          onClick={() => handleSelect(group.label)}
          className={cn(
            "w-full flex items-center px-4 py-2.5 text-sm font-medium transition-colors",
            selectedCategory === group.label
              ? "bg-accent text-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <span className="truncate">{group.label}</span>
        </button>
      ))}
      <div className="mx-3 my-1 border-t border-border" />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfS3PyUTXfxg8n0C0EVDxv2MS8W_cZIBFue4wcLK4rSuixKaw/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
      >
        <span className="truncate">Request Material</span>
        <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-50" />
      </a>
      <a
        href="mailto:basispeorialibrary@gmail.com"
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
      >
        <span className="truncate">Contribute</span>
        <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-50" />
      </a>
    </>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed bottom-4 left-4 z-50 p-2.5 rounded-full bg-muted/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border flex flex-col">
            <div className="flex items-center justify-end px-2 py-2">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <nav className="py-1 overflow-y-auto flex-1">{navItems}</nav>
          </aside>
        </>
      )}

      <aside
        className="shrink-0 border-r border-border overflow-hidden bg-sidebar-background hidden md:flex flex-col relative select-none"
        style={{ width: effectiveWidth }}
      >
        {!collapsed && (
          <nav className="py-2 overflow-y-auto flex-1 pr-3">{navItems}</nav>
        )}

        <button
          onClick={toggleCollapse}
          className="absolute top-2.5 right-1 z-20 p-0.5 text-muted-foreground/70 hover:text-foreground transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.75} />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.75} />
          )}
        </button>

        <div
          onMouseDown={onMouseDown}
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize z-10"
        />
      </aside>
    </>
  );
};

export default CourseSidebar;
