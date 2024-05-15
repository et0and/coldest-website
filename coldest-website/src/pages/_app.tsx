import { useEffect, useState } from 'react';
import { isNearCoordinates } from '../utils/geoLocation';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const targetLatitude = -82.862755;
const targetLongitude = 135.000000;

function MyApp({ Component, pageProps }: AppProps) {
  const [isNearTarget, setIsNearTarget] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      const near = await isNearCoordinates(targetLatitude, targetLongitude, targetLatitude, targetLongitude);
      setIsNearTarget(near);
    };

    checkLocation();
  }, []);

  return (
    <div className="min-h-full flex items-center justify-center">
      {isNearTarget ? (
        <Component {...pageProps} />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">-82.862755, 135.000000</h1>
        </div>
      )}
    </div>
  );
}

export default MyApp;