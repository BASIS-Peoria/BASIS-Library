interface SectionHeaderProps {
  title: string;
  count: number;
}

const SectionHeader = ({ title, count }: SectionHeaderProps) => (
  <div className="px-4 py-2 bg-muted/30 border-b border-border">
    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
      {title} ({count})
    </h3>
  </div>
);

export default SectionHeader;
