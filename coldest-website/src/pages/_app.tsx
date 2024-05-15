import { useEffect, useState } from 'react';
import { isNearCoordinates } from '../utils/geoLocation';
import '../styles/globals.css';

const targetLatitude = 41.678440;
const targetLongitude = 140.437637;

function MyApp({ Component, pageProps }) {
  const [isNearTarget, setIsNearTarget] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      const near = await isNearCoordinates(targetLatitude, targetLongitude, targetLatitude, targetLongitude);
      setIsNearTarget(near);
    };

    checkLocation();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isNearTarget ? (
        <Component {...pageProps} />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">You are not in the right place</h1>
          <p className="mt-4">Coordinates: 41.678440, 140.437637</p>
        </div>
      )}
    </div>
  );
}

export default MyApp;
