import { memo, useState } from "react";
import { ExternalLink, AlertCircle, Copy, Check } from "lucide-react";
import type { ResourceType } from "@/data/courses";

export interface ResourceItem {
  id: string;
  title: string;
  link: string | null;
  type: ResourceType;
}

interface ResourceRowProps {
  item: ResourceItem;
  subtitle?: string;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const ResourceRow = memo(({ item, subtitle, isSelected, onToggle }: ResourceRowProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const hasLink = !!item.link;

  const copyLink = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer ${
        isSelected ? "bg-accent/30" : ""
      }`}
      onClick={() => { if (hasLink) onToggle(item.id); }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); if (hasLink) onToggle(item.id); }}
        className="w-5 h-5 rounded border border-border flex items-center justify-center shrink-0"
        disabled={!hasLink}
      >
        {isSelected && <span className="text-xs text-foreground">✓</span>}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {subtitle && (
            <span className="text-sm font-medium text-foreground shrink-0">{subtitle}</span>
          )}
          <span className={`text-sm truncate ${hasLink ? "text-foreground" : "text-muted-foreground"}`}>
            {subtitle && <span className="text-muted-foreground mx-1">-</span>}
            {item.title}
          </span>
        </div>
      </div>

      {hasLink ? (
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={(e) => { e.stopPropagation(); copyLink(item.link!, item.id); }}
            className="text-muted-foreground hover:text-foreground p-1 rounded transition-colors"
            title="Copy link"
          >
            {copiedId === item.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <a
            href={item.link!}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground hover:text-foreground p-1 rounded transition-colors"
            title="Open link"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ) : (
        <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0" />
      )}
    </div>
  );
});

ResourceRow.displayName = "ResourceRow";

export default ResourceRow;
