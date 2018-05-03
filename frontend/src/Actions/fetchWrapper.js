export const HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'whatever-you-want'
};

export const BASE_URL = 'http://localhost:3001';

export const fetchWrapper = (url, method, headers, body) => {
    return fetch(url, {method, headers, body})
        .then(response => response.json())
        .catch(error => console.log('error:', error))
}