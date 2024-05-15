import { useEffect, useState } from 'react';
import { isNearCoordinates } from '../utils/geoLocation.ts';
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
    <div className="flex items-center justify-center">
      {isNearTarget ? (
        <Component {...pageProps} />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">You are not in the right place</h1>
          <p className="mt-4">-82.862755, 135.000000</p>
        </div>
      )}
    </div>
  );
}

export default MyApp;