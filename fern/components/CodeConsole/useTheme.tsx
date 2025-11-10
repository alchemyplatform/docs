const useTheme = () => {
  if (typeof window === "undefined") {
    return { isDark: false, setIsDark: () => {} };
  }
  
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark"),
  );

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.target === document.documentElement &&
          mutation.attributeName === "class"
        ) {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return { isDark, setIsDark };
};

export default useTheme;
