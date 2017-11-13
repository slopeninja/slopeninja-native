const API_URL = 'http://api.slope.ninja';

export const getResorts = async () => {
  const response = await fetch(`${API_URL}/resorts`);
  const data = await response.json();
  return data.resorts;
};

export const registerUserDevice = async (deviceName, notificationToken) => {
  const response = await fetch(`${API_URL}/user-devices`, {
    method: 'POST',
    headers:
    new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({
      deviceName,
      notificationToken,
    }),
  });
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return data;
};
