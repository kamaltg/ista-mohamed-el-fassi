import navLinks from "@/data/navLinks.json";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useBreadcrumbs() {
  const { pathname } = useLocation();

  const findBreadcrumbs = (items, targetHref) => {
    for (let item of items) {
      if (item.href === targetHref) {
        return [item.label];
      }

      if (item.dropdown) {
        const found = findBreadcrumbs(item.dropdown, targetHref);

        if (found) {
          return [...found, item.label];
        }
      }
    }
  };

  return useMemo(() => {
    const result = findBreadcrumbs(navLinks, pathname);
    return result ? result.reverse() : [];
  }, [pathname]);
}

export default useBreadcrumbs;
