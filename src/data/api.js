import { getUser, removeUser } from '../util.js';

const host = 'https://parseapi.back4app.com';
const appId = 'bykAgbYn3443bbzegxKl0N0SA9gymKXr3wK1dCa6';
const apiKey = 'Cz8yaWgVxkw5sxytvJ0eTeDMNfJUW6msZZ8lDRFb';

async function requester(method, url, data) {
  const userData = getUser();

  const options = {
    method,
    headers: {
      'X-Parse-Application-Id': appId,
      'X-Parse-JavaScript-Key': apiKey,
    },
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if (userData) {
    options.headers['X-Parse-Session-Token'] = userData.sessionToken;
  }

  try {
    const response = await fetch(host + url, options);

    let result;
    if (response.status !== 204) {
      result = await response.json();
    }

    if (response.ok === false) {
      if (result.code === 209) {
        removeUser();
      }

      const error = result;
      throw error;
    }

    return result;
  } catch (error) {
    alert(error.error);
    throw error;
  }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export { get, post, put, del };
