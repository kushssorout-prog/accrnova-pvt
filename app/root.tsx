import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./pvt.css";

export function meta() {
  return [
    { title: "ACCRNOVA Private Limited — AI Solutions & Software Development" },
    {
      name: "description",
      content:
        "Full-service AI company: enterprise governance, ML engineering, software development, consumer AI safety. Part of ACCRNOVA Group. Bangalore.",
    },
    { property: "og:title", content: "ACCRNOVA Private Limited — AI Solutions & Software Development" },
    {
      property: "og:description",
      content:
        "Full-service AI company: enterprise governance, ML engineering, software development, consumer AI safety. Part of ACCRNOVA Group. Bangalore.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
