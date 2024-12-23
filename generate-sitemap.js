const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.9 },
    { url: '/about-us', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact-us', changefreq: 'weekly', priority: 0.7 },
    { url: '/services', changefreq: 'weekly', priority: 0.7 },
    { url: '/our-work', changefreq: 'weekly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'weekly', priority: 0.7 },
    { url: '/terms-conditions', changefreq: 'weekly', priority: 0.7 },
    { url: '/thank-you', changefreq: 'weekly', priority: 0.7 },
    // Add more routes as needed
  ];

  const stream = new SitemapStream({ hostname: 'https://socialmediastic.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');
  stream.pipe(writeStream);
  links.forEach(link => stream.write(link));
  stream.end();

  await streamToPromise(stream); // wait until the stream is fully written
}

generateSitemap().then(() => {
  console.log('Sitemap generated successfully');
});
