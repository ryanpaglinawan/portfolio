/**
 * SEO Head component for meta tags and structured data optimization
 */

import React from 'react';

const SEOHead: React.FC = () => {
  React.useEffect(() => {
    // Set document title
    document.title = 'Ryan P. Paglinawan - Senior Full-Stack Developer | 18+ Years Experience';
    
    // Create meta tags
    const metaTags = [
      { name: 'description', content: 'Senior Full-Stack Developer with 18+ years experience in React, Laravel, PHP, and modern web technologies. Available for full-time positions and freelance projects.' },
      { name: 'keywords', content: 'Ryan Paglinawan, Full-Stack Developer, React Developer, Laravel Developer, PHP Developer, Web Developer Philippines, Frontend Developer, Backend Developer' },
      { name: 'author', content: 'Ryan P. Paglinawan' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      
      // Open Graph tags
      { property: 'og:title', content: 'Ryan P. Paglinawan - Senior Full-Stack Developer' },
      { property: 'og:description', content: 'Senior Full-Stack Developer with 18+ years experience in React, Laravel, PHP, and modern web technologies.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Ryan P. Paglinawan Portfolio' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Ryan P. Paglinawan - Senior Full-Stack Developer' },
      { name: 'twitter:description', content: 'Senior Full-Stack Developer with 18+ years experience in React, Laravel, PHP, and modern web technologies.' },
      
      // Additional SEO tags
      { name: 'theme-color', content: '#0891b2' },
      { name: 'msapplication-TileColor', content: '#0891b2' }
    ];

    // Remove existing meta tags and add new ones
    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.remove();
      }
      
      const metaElement = document.createElement('meta');
      if (tag.name) metaElement.setAttribute('name', tag.name);
      if (tag.property) metaElement.setAttribute('property', tag.property);
      metaElement.setAttribute('content', tag.content);
      document.head.appendChild(metaElement);
    });

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ryan P. Paglinawan",
      "jobTitle": "Senior Full-Stack Developer",
      "description": "Senior Full-Stack Developer with 18+ years experience in React, Laravel, PHP, and modern web technologies",
      "email": "ryan.p.paglinawan@gmail.com",
      "telephone": "+63-917-301-0857",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Metro Manila",
        "addressCountry": "Philippines"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Navotas Polytechnic College"
      },
      "knowsAbout": [
        "React.js", "Laravel", "PHP", "JavaScript", "TypeScript", "Vue.js", 
        "MySQL", "MongoDB", "Node.js", "Web Development", "Full-Stack Development"
      ],
      "url": window.location.href
    };

    // Add structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      metaTags.forEach(tag => {
        const element = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
        if (element) element.remove();
      });
      
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) structuredDataScript.remove();
    };
  }, []);

  return null;
};

export default SEOHead;
