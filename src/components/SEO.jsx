import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, canonical }) => {
  const siteTitle = "Grooo Digital | Expert Digital Marketing Agency";
  const defaultDescription =
    "Grooo Digital is a premium digital marketing agency in Navi Mumbai. We specialize in SEO, Social Media, and Web Development to scale your business.";
  const siteUrl = "https://grooodigital.com"; // Replace with actual domain when live

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Grooo Digital",
    image: `${siteUrl}/favicon.png`,
    description: description || defaultDescription,
    url: siteUrl,
    telephone: "+919325629256",
    address: {
      "@type": "PostalAddress",
      streetAddress: "101, Business Bay",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0330",
      longitude: "73.0297",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.instagram.com/growdigital",
      "https://www.linkedin.com/company/growdigital",
    ],
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title ? `${title} | Grooo Digital` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="keywords"
        content={
          keywords ||
          "digital marketing agency, seo services, navi mumbai, web development, social media marketing, grooo digital"
        }
      />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
