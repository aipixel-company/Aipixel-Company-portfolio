import React, { useEffect } from "react";

/**
 * Reusable SEO component to dynamically update document metadata and schema.org JSON-LD.
 * Designed to satisfy Section 6.2 and 6.3 of the technical specifications.
 */
export default function SEO({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  ogImage = "https://aipixel.tech/preview-card.jpg", // default fallback OG image
  noIndex = false,
  schema = null,
}) {
  const siteUrl = "https://aipixel.tech";
  const canonicalUrl = canonicalPath ? `${siteUrl}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath}` : siteUrl;

  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper function to set or create meta tag
    const setMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (content) {
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute(attribute, value);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      } else if (element) {
        element.remove();
      }
    };

    // Helper function to set or create link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (href) {
        if (!element) {
          element = document.createElement("link");
          element.setAttribute("rel", rel);
          document.head.appendChild(element);
        }
        element.setAttribute("href", href);
      } else if (element) {
        element.remove();
      }
    };

    // 2. Meta description
    setMetaTag("name", "description", description);

    // 3. Robots
    setMetaTag("name", "robots", noIndex ? "noindex,nofollow" : "index,follow");

    // 4. Canonical
    setLinkTag("canonical", canonicalUrl);

    // 5. Open Graph tags
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:site_name", "AI Pixel");
    setMetaTag("property", "og:locale", "en_GB");

    // 6. Twitter Card tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 7. Schema.org JSON-LD (Section 6.3)
    let schemaScript = document.getElementById("seo-schema");
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.setAttribute("id", "seo-schema");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    // Cleanup logic (not strictly needed for static prerendering, but good for client-side navigation)
    return () => {
      // We don't remove standard meta tags to prevent flashing, but we can clean up schemas
      const script = document.getElementById("seo-schema");
      if (script) script.remove();
    };
  }, [title, description, canonicalUrl, ogType, ogImage, noIndex, schema]);

  return null;
}
