export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const isNearCoordinates = async (
  latitude: number,
  longitude: number,
  targetLatitude: number,
  targetLongitude: number,
  radius: number = 0.1 // Default radius is 0.1 degrees (around 11 km)
): Promise<boolean> => {
  try {
    const position = await getCurrentPosition();
    const { latitude: userLatitude, longitude: userLongitude } =
      position.coords;

    const distance = Math.sqrt(
      Math.pow(targetLatitude - userLatitude, 2) +
        Math.pow(targetLongitude - userLongitude, 2)
    );

    return distance <= radius;
  } catch (error) {
    console.error("Error getting location:", error);
    return false;
  }
};
