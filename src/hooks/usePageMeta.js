import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const SITE_NAME = "Alfa Trade";

/** Sets the document title and meta description for the current page. */
const usePageMeta = (title, description) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = title ? `${t(title)} — ${SITE_NAME}` : `${SITE_NAME} — ${t("Petroleum Distribution & Fuel Supply")}`;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", t(description));
    }
  }, [title, description, language, t]);
};

export default usePageMeta;
