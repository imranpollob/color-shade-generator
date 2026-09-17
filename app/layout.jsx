import './globals.css';
import '@rc-component/color-picker/assets/index.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const siteUrl = 'https://imranpollob.github.io/color-shade-generator/';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Color Shade Generator - Generate Color Palettes',
    template: '%s | Color Shade Generator'
  },
  description:
    'Generate lighter and darker shades for any hex color instantly. Perfect for designers and developers. Copy hex values and build a full palette in seconds.',
  keywords: [
    'color generator',
    'hex color',
    'color palette',
    'shade generator',
    'tint and shade',
    'color tool',
    'design tool',
    'web design'
  ],
  authors: [{ name: 'Imran Pollob', url: 'https://github.com/imranpollob' }],
  creator: 'Imran Pollob',
  applicationName: 'Color Shade Generator',
  manifest: 'manifest.json',
  icons: {
    icon: 'favicon.png',
    shortcut: 'favicon.png',
    apple: 'favicon.png'
  },
  openGraph: {
    title: 'Color Shade Generator - Generate Color Palettes',
    description:
      'Generate lighter and darker shades for any hex color instantly. Perfect for designers and developers.',
    type: 'website',
    url: siteUrl,
    siteName: 'Color Shade Generator',
    images: [
      {
        url: 'og-image.jpeg',
        width: 2628,
        height: 2356,
        alt: 'Color Shade Generator - lighter and darker shades preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Shade Generator',
    description: 'Generate lighter and darker color shades instantly, then copy the hex values you need.',
    images: ['og-image.jpeg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  alternates: {
    canonical: siteUrl
  }
};

const primaryFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Color Shade Generator',
  url: siteUrl,
  description:
    'Generate lighter and darker shades for any hex color instantly. Perfect for designers and developers.',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  author: {
    '@type': 'Person',
    name: 'Imran Pollob',
    url: 'https://github.com/imranpollob'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
