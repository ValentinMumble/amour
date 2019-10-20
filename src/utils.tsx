import qs from 'query-string';

export const api = async (uri: string, { data = {}, method = 'GET' } = {}) => {
  const response = await fetch(uri, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded' //Fucking CORS
    },
    body: Object.entries(data).length === 0 ? null : qs.stringify(data)
  });
  const json = await response.json();
  console.log('api', json);
  return json;
};