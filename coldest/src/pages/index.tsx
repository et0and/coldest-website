import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const IndexPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const supportsGeolocation =
      "navigator" in globalThis && "geolocation" in navigator;

    if (supportsGeolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const result = checkCoordinates(latitude, longitude);
          setContent(result);
        },
        (error) => {
          console.error("Error getting location:", error);
          setContent("Error getting location");
        }
      );
    } else {
      setContent("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>Coldest website</title>
          <meta property="og:title" content="Coldest website" key="title" />
          <meta property="og:title" content="Coldest website" key="title" />
          <meta property="twitter:title" content="Coldest website" />
          <meta name="theme-color" content="#000000" />
          <meta property="description" content="A door awaits to be opened" />
          <meta
            property="og:description"
            content="A door awaits to be opened"
          />
          <meta
            property="twitter:description"
            content="A door awaits to be opened"
          />
          <meta
            property="og:url"
            content="https://work.tom.so/coldest-website"
          />
          <meta property="og:image" content="og.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content="og.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
      </div>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 bg-black ${inter.className}`}
      >
        <div className="text-white">{content}</div>
      </main>
    </>
  );
};

export default IndexPage;

const targetLatitude = -82.862755;
const targetLongitude = 135.0;

const checkCoordinates = (latitude: number, longitude: number) => {
  const isWithinRange =
    latitude >= targetLatitude - 0.1 &&
    latitude <= targetLatitude + 0.1 &&
    longitude >= targetLongitude - 0.1 &&
    longitude <= targetLongitude + 0.1;

  return isWithinRange ? "Right location" : "-82.862755, 135.000000";
};
