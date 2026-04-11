import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterToolbarProps {
  typeFilter: string;
  yearFilter: string;
  onTypeChange: (v: string) => void;
  onYearChange: (v: string) => void;
  availableYears: string[];
  allSelected: boolean;
  selectedCount: number;
  itemCount: number;
  onToggleAll: () => void;
  onOpenSelected: () => void;
}

const FilterToolbar = ({
  typeFilter,
  yearFilter,
  onTypeChange,
  onYearChange,
  availableYears,
  allSelected,
  selectedCount,
  itemCount,
  onToggleAll,
  onOpenSelected,
}: FilterToolbarProps) => (
  <div className="flex items-center gap-3 px-4 py-2 border-b border-border flex-wrap">
    <button
      onClick={onToggleAll}
      className="w-5 h-5 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
      aria-label="Select all"
    >
      {allSelected && <span className="text-xs text-foreground">✓</span>}
    </button>

    {selectedCount > 0 && (
      <button onClick={onOpenSelected} className="text-sm text-primary hover:underline font-medium">
        Open {selectedCount} selected
      </button>
    )}

    <div className="flex items-center gap-2">
      <Filter className="w-3.5 h-3.5 text-muted-foreground" />

      <Select value={typeFilter} onValueChange={onTypeChange}>
        <SelectTrigger className="h-7 w-24 text-xs border-border">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All types</SelectItem>
          <SelectItem value="book">Books</SelectItem>
          <SelectItem value="note">Notes</SelectItem>
          <SelectItem value="collegeboard">College Board</SelectItem>
        </SelectContent>
      </Select>

      <Select value={yearFilter} onValueChange={onYearChange}>
        <SelectTrigger className="h-7 w-24 text-xs border-border">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All years</SelectItem>
          {availableYears.map((y) => (
            <SelectItem key={y} value={y}>{y}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <span className="text-xs text-muted-foreground ml-auto">
      {itemCount} {itemCount === 1 ? "item" : "items"}
    </span>
  </div>
);

export default FilterToolbar;
