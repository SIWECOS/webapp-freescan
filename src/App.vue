<template>
  <div>
    <div class="freescanform">
      <h3>{{ $t("messages.headline") }}</h3>

      <p>{{ $t("messages.description") }}</p>

      <p class="wppb-error" v-if="msg">{{ $t('messages.' + msg) }}</p>

      <div>
        <form id="freescanform" @submit.prevent="submit">
          <p class="freescan-domain">
            <label for="domain">{{ $t("messages.field_domain") }}</label><br>
            <input name="domain" id="domain" :placeholder="$t('messages.field_domain')" type="text" required="true"
                   v-model="domain.domain">
          </p>
          <p class="freescan-submit">
            <input name="wp-submit" id="wppb-submit" class="button button-primary" :value="$t('messages.field_submit')"
                   type="submit" :disabled="fetchInterval !== false"><br>
          </p>
        </form>
      </div>

      <div v-if="fetchInterval !== false" class="freescanwaitmessage">
        <p>{{ $t("messages.pleasewait") }}</p>
      </div>
      <div style="padding-bottom: 25px;"></div>
      <div v-if="scanresult">
        <div class="scanners-wrapper" v-show="scanresult">
          <div class="scanner-content" v-for="(scanner) in scanresult.scanners">
            <scanner-details v-bind:scanner="scanner"></scanner-details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from './services/api.js'
  import ScannerDetails from './components/ScannerDetails'

  export default {
    name: 'app',
    data () {
      return {
        scanresult: false,
        domain: {
          'domain': ''
        },
        resultId: false,
        msg: '',
        fetchInterval: false
      }
    },
    methods: {
      submit: function () {
        this.scanresult = false
        if (!this.domain.domain.toString().startsWith('http')) {
          this.domain.domain = 'https://' + this.domain.domain.toString()
        }
        this.getResult()
        this.fetchInterval = setInterval(this.getResult, 3000)
      },
      getResult: function () {
        api.$http.post(api.urls.start_url, this.domain).then((response) => {
          if (response.data.status === 3) {
            this.resultId = response.data.id

            clearInterval(this.fetchInterval)
            this.fetchInterval = false

            this.processResultResponse()
          }
        }).catch((err) => {
          this.msg = 'could_not_start'
          console.log(err)
        })
      },
      processResultResponse: function () {
        api.$http.get(api.urls.fetch_url + this.resultId).then((response) => {
          this.msg = ''
          this.scanresult = response.data

          // Trigger gauge
          setTimeout(function () {
            if (window.jQuery && window.jQuery('.freescanform .gaugeMeter') && typeof window.jQuery('.freescanresult .gaugeMeter').gaugeMeter !== 'undefined') {
              window.jQuery('.freescanform .gaugeMeter').gaugeMeter()
            }
          }, 500)
        }).catch((err) => {
          this.msg = 'could_not_start'
          console.log(err)
        })
      }
    },
    components: {
      // <my-component> will only be available in parent's template
      'scanner-details': ScannerDetails
    }
  }
</script>

<style>

</style>
