import axios from 'axios';

const getAccessToken = async () => {
  const client_id = 'IQTCrAoSIzFhOwoo0AwNkmdmbmCpFfy2'; // Replace with your API Key
  const client_secret = 'jekH6WtraGpRoU7Y'; // Replace with your API Secret

  const response = await axios.post(
    'https://test.api.amadeus.com/v1/security/oauth2/token',
    `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;
};

export default getAccessToken;
