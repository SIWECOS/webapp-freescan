<template>
  <div class="scanner-item-data">
    <span class="scanner-data">{{ scanner.scanner_type }}</span>

    <button class="btn btn-primary" v-on:click="showDetails = (showDetails) ? 0 : 1" v-if="scanner.description">
      <span v-if="!showDetails">{{ $t('messages.more_info') }}</span><span v-if="showDetails">{{ $t('messages.less_info') }}</span>
    </button>

    <a :href="'https://www.siwecos.de/wiki/' + scanner.scanner_type + '/' + $i18n.locale.toUpperCase()" :title="$t('messages.background_info')"
       target="_blank" v-if="!scanner.description">{{ $t('messages.background_info') }} &gt;&gt;</a>

    <div class="scanner-check-item-description" v-show="showDetails">
      <div v-html="scanner.description"></div>

      <small><a :href="'https://www.siwecos.de/wiki/' + scanner.scanner_type + '/' + $i18n.locale.toUpperCase()" :title="$t('messages.background_info')"
                target="_blank">{{ $t('messages.background_info') }} &gt;&gt;</a></small>
    </div>

    <br><span><small>{{ $t('messages.lastScan') }}: {{ scanner.updated_at_human }}</small></span>
    <p></p>

    <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" version="1.1">
      <g transform="translate(63,63)">
        <text x="0" y="0%" dominant-baseline="central" text-anchor="middle" font-size="200%">{{ scanner.score.toFixed(0) }}</text>
        <path d="M-35.35,35.36 A50,50 0 1 1 35.35,35.36" stroke="lightgrey" stroke-width="25" stroke-linecap="round" fill="none"/>
        <path v-bind:d="'M-35.35,35.36 A50,50 0 ' +  gaugeData.big_arc + ' 1 ' + gaugeData.score_x + ',' + gaugeData.score_y" v-bind:stroke="gaugeData.score_col" stroke-width="25" stroke-linecap="round" fill="none"/>
      </g>
    </svg>
    <div class="scanner-check-wrapper">
      <div class="scanner-check-content" v-for="(scanresult) in scanner.result">
        <scan-result v-bind:scanresult="scanresult"></scan-result>
        <div style="clear:both"></div>
      </div>
    </div>


  </div>
</template>

<style>
  .scanner-check-wrapper{
    width: 80%;
    float:left;
  }
</style>
<script>
  import ScanResult from './ScanResult'
  import moment from 'moment'

  export default {
    components: {ScanResult},
    name: 'ScannerDetails',
    data () {
      return {
        'showDetails': false
      }
    },
    computed: {
      gaugeData: function () {
        let radius = 50
        let origin = Math.PI * 0.25
        let factor = Math.PI * 1.5 / 100
        let deg = this.scanner.score.toFixed(0) * factor
        let hue = (this.scanner.score.toFixed(0) / 100 * 120)

        return {
          'score_x': Math.cos(deg - origin) * radius * -1,
          'score_y': Math.sin(deg - origin) * radius * -1,
          'score_col': 'hsl(' + hue + ', 100%, 50%)',
          'big_arc': (deg > Math.PI) ? 1 : 0
        }
      }
    },
    created: function () {
      let offset = new Date().getTimezoneOffset()

      this.scanner.updated_at_human = moment(String(this.scanner.updated_at)).add(parseInt(offset / 60 * -1), 'hours').format('DD.MM.YYYY HH:mm')
    },
    props: ['scanner']
  }
</script>
