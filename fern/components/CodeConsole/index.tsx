import useTheme from "./useTheme";

const CodeConsole = () => {
  const { isDark } = useTheme();

  return <div>{isDark ? "Dark" : "Light"}</div>;
};

export default CodeConsole;
