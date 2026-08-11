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
        let { svg: renderedSvg } = await mermaid.render(uniqueId.current, chart);
        
        // Ensure responsive width scaling without blowing up vertical diagrams
        renderedSvg = renderedSvg
          .replace(/width="100%"/, '')
          .replace(/style="max-width:[^"]*"/, 'style="max-width:100%; height:auto;"');

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
    <div className="my-6 flex justify-center w-full overflow-x-auto py-4 px-2 rounded-2xl bg-ink-900/[0.02] dark:bg-[#0A0A0A] border border-ink-900/10 dark:border-[#262626] shadow-sm">
      {svg ? (
        <div 
          className="w-full max-w-xl mx-auto text-center overflow-x-auto [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:mx-auto [&>svg]:block [&_g.node_rect]:rx-2 [&_g.node_rect]:ry-2 [&_g.node_rect]:stroke-cyan-500/40 dark:[&_g.node_rect]:stroke-cyan-500/30 [&_g.node_rect]:fill-white dark:[&_g.node_rect]:fill-[#141414] [&_span]:text-sm [&_span]:font-medium [&_span]:text-ink-900 dark:[&_span]:text-slate-100"
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
