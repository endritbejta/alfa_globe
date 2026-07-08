import { useEffect } from "react";

const SITE_NAME = "Alfa Globe";

/** Sets the document title and meta description for the current page. */
const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Reliable Energy Solutions`;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", description);
    }
  }, [title, description]);
};

export default usePageMeta;
