import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SITE_NAME = "Funnel Experts Tours & Travel LLC";
const DEFAULT_DESCRIPTION = "Premium UAE tour packages — desert safaris, city tours, adventure experiences in Dubai, Fujairah & Ras Al Khaimah. Book your luxury UAE experience today.";

export function SEO({ title, description, keywords, image }: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Luxury UAE Tours & Travel`;
  const pageDescription = description || DEFAULT_DESCRIPTION;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
}
