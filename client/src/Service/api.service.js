class HttpClient {
  baseUrl = 'http://localhost:3000/';
  get(url) {
    return fetch.get(this.baseUrl + url);
  }
  post(url, body) {
    return fetch.post(this.baseUrl + url, body);
  }
}

export default new HttpClient();
