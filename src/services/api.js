import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  $http: axios,
  urls: {
    start_url: 'https://ca.staging2.siwecos.de/api/v1/getFreeScanStart',
    status_url: 'https://ca.staging2.siwecos.de/api/v1/scan/status/free/',
    fetch_url: 'https://bla.staging2.siwecos.de/api/v1/freescan/result/'
  }
}
