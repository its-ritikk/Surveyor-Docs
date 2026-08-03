import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeadingsContext = createContext(null);

export function HeadingsProvider({ children }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Reset headings and activeId on route change
    setHeadings([]);
    setActiveId("");

    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    const updateHeadings = () => {
      // Scan for h2 and h3 elements that have an id
      const headingElements = Array.from(
        mainElement.querySelectorAll("h2[id], h3[id]")
      );

      const items = headingElements.map((el) => ({
        id: el.id,
        text: el.innerText || el.textContent,
        level: el.tagName.toLowerCase() === "h2" ? 2 : 3,
      }));

      setHeadings(items);
    };

    const handleScroll = () => {
      const headingElements = Array.from(
        document.querySelectorAll("main h2[id], main h3[id]")
      );
      if (headingElements.length === 0) return;

      const scrollPosition = window.scrollY + 140; // Offset for header + margin
      let active = headingElements[0].id;

      for (let i = 0; i < headingElements.length; i++) {
        const el = headingElements[i];
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          active = el.id;
        } else {
          break;
        }
      }
      setActiveId(active);
    };

    // Run initially
    updateHeadings();
    handleScroll();

    // Set up MutationObserver to update headings if children inside main change
    const observer = new MutationObserver(() => {
      updateHeadings();
      handleScroll();
    });

    observer.observe(mainElement, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <HeadingsContext.Provider value={{ headings, activeId }}>
      {children}
    </HeadingsContext.Provider>
  );
}

export function useHeadings() {
  const context = useContext(HeadingsContext);
  if (!context) {
    return { headings: [], activeId: "" };
  }
  return context;
}
