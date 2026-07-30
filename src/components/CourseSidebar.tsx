import { useState, useCallback, useRef } from "react";
import { PanelLeftClose, PanelLeft, Menu, ExternalLink } from "lucide-react";
import { courseGroups } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (label: string | null) => void;
}

const MIN_WIDTH = 48;
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
      setWidth(prevWidth.current);
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

  const navContent = (
    <nav className="py-2 overflow-y-auto flex-1">
      <div className="flex items-center">
        <button
          onClick={() => handleSelect(null)}
          className={cn(
            "flex-1 flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors",
            selectedCategory === null
              ? "bg-accent text-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <span className="truncate">All Categories</span>
        </button>
        {!collapsed && (
          <button
            onClick={() => {
              if (mobileOpen) {
                setMobileOpen(false);
              } else {
                toggleCollapse();
              }
            }}
            className="p-1.5 mr-2 rounded hover:bg-sidebar-accent transition-colors text-sidebar-foreground shrink-0"
            aria-label="Collapse sidebar"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="mx-3 my-1 border-t border-border" />
      {courseGroups.map((group) => (
        <button
          key={group.label}
          onClick={() => handleSelect(group.label)}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors",
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
    </nav>
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
            {navContent}
          </aside>
        </>
      )}

      <aside
        className="shrink-0 border-r border-border overflow-hidden bg-sidebar-background hidden md:flex flex-col relative select-none"
        style={{ width: effectiveWidth }}
      >
        {collapsed ? (
          <div className="flex items-center justify-center py-2">
            <button
              onClick={toggleCollapse}
              className="p-1.5 rounded hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
              aria-label="Expand sidebar"
            >
              <PanelLeft className="w-4 h-4" />
            </button>
          </div>
        ) : (
          navContent
        )}

        <div
          onMouseDown={onMouseDown}
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize z-10"
        />
      </aside>
    </>
  );
};

export default CourseSidebar;
