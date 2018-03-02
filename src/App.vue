<template>
  <div>
    <h3>{{ $t("messages.headline") }}</h3>

    <p>{{ $t("messages.description") }}</p>

    <p class="wppb-error" v-if="msg">{{ $t('messages.' + msg) }}</p>

    <div>
      <form id="freescanform" @submit.prevent="submit">
        <p class="freescan-domain">
          <label for="domain">{{ $t("messages.field_domain") }}</label><br>
          <input name="domain" id="domain" :placeholder="$t('messages.field_domain')" type="url" required="true" v-model="domain.domain">
        </p>
        <p class="freescan-submit">
          <input name="wp-submit" id="wppb-submit" class="button button-primary" :value="$t('messages.field_submit')" type="submit" :disabled="fetchInterval !== false"><br>
        </p>
      </form>
    </div>

    <div v-if="fetchInterval !== false">
      <p>{{ $t("messages.pleasewait") }}</p>
    </div>

    <div v-if="scanresult" class="freescanresult">
      <div class="scanners-wrapper" v-show="scanresult">
        <div class="scanner-content" v-for="(scanner) in scanresult.scanners">
          <scanner-details v-bind:scanner="scanner"></scanner-details>
        </div>
      </div>

      <div class="impact-gauge gaugeMeter" :data-percent="scanresult.weightedMedia.toFixed(0)" data-size="100" data-width="20" data-style="Arch" data-theme="Red-Gold-Green" data-animate_gauge_colors="1" style="width: 100px;" v-if="scanresult">
        <span style="line-height: 100px; font-size: 22px;">{{ scanresult.weightedMedia.toFixed(0) }}</span>
        <canvas width="100" height="100"></canvas>
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
          if (window.jQuery && window.jQuery('.freescanresult .gaugeMeter') && typeof window.jQuery('.freescanresult .gaugeMeter').gaugeMeter !== 'undefined') {
            window.jQuery('.freescanresult .gaugeMeter').gaugeMeter()
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
