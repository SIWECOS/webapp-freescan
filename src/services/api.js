import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  $http: axios,
  urls: {
    start_url: 'https://api.siwecos.de/ca/current/public/api/v1/getFreeScanStart',
    status_url: 'https://api.siwecos.de/ca/current/public/api/v1/scan/status/free/',
    fetch_url: 'https://api.siwecos.de/bla/current/public/api/v1/freescan/result/'
  }
}
