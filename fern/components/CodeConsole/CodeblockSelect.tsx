type Option = {
  value: string;
  label: string;
};

export const CodeblockSelect = ({
  isDark,
  options,
  selectedOption,
  onChange,
}: {
  isDark: boolean;
  options: Option[];
  selectedOption: string;
  onChange: (value: string) => void;
}) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
      style={{
        backgroundColor: isDark ? "#383838" : "#F1F1F1",
        color: isDark ? "#EDEDED" : "black",
        border: `1px solid ${isDark ? "#383838" : "#F1F1F1"}`,
        borderRadius: "6px",
        padding: "6px 8px",
        fontFamily: "monospace",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
