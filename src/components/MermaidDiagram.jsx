import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "../context/ThemeContext";

export default function MermaidDiagram({ chart }) {
  const { theme } = useTheme();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);
  
  // Create a unique id for this render instance
  const uniqueId = useRef(`mermaid-${Math.floor(Math.random() * 1000000)}`);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: theme === "dark" ? "dark" : "default",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
      sequence: {
        useMaxWidth: true,
      },
      state: {
        useMaxWidth: true,
      },
      class: {
        useMaxWidth: true,
      },
      journey: {
        useMaxWidth: true,
      }
    });
  }, [theme]);

  useEffect(() => {
    let isMounted = true;
    setError(null);

    const renderChart = async () => {
      try {
        setSvg("");
        const { svg: renderedSvg } = await mermaid.render(uniqueId.current, chart);
        
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
        if (isMounted) {
          setError("Failed to render diagram. Please verify the Mermaid syntax.");
          const badEl = document.getElementById(uniqueId.current);
          if (badEl) badEl.remove();
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, theme]);

  if (error) {
    return (
      <div className="my-6 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 text-red-700 dark:text-red-400 text-sm">
        <p className="font-semibold mb-1">Diagram Render Error</p>
        <p className="text-[12.5px] leading-5">{error}</p>
        <pre className="mt-2.5 p-2 bg-red-100/50 dark:bg-red-950/40 rounded text-[11.5px] font-mono overflow-x-auto">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div className="my-6 flex justify-center w-full overflow-x-auto py-2">
      {svg ? (
        <div 
          className="w-full max-w-full text-center"
          dangerouslySetInnerHTML={{ __html: svg }} 
        />
      ) : (
        <div className="flex items-center justify-center py-8 text-ink-400 dark:text-slate-500 text-sm animate-pulse">
          Rendering diagram...
        </div>
      )}
    </div>
  );
}
