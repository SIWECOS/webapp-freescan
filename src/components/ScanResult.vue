<template>
  <div class="scanner-check-item-data" v-if="!(scanresult.scoreTypeRaw === 'hidden' || (scanresult.scoreTypeRaw === 'bonus' && scanresult.score !== 100))">
    <div class="col-85">
      <span class="round-check scanner-check-data" v-bind:class="{ 'score-red': scanresult.score < 30, 'score-orange': scanresult.score >= 30 && scanresult.score < 50, 'score-yellow': scanresult.score >= 50 && scanresult.score < 100, 'score-green': scanresult.score >=100 }" v-html="scanresult.name"></span>
    </div>
    <div class="col-20">
      <button class="btn btn-primary" v-show="!scanresult.has_error" v-bind:class="(showDetails) ? 'active' : ''" v-on:click="showDetails = (showDetails) ? 0 : 1">
        <span v-if="!showDetails">{{ $t('messages.more_info') }}</span><span v-if="showDetails">{{ $t('messages.less_info') }}</span>
      </button>
    </div>
 <div style="clear: both"></div>
    <div class="scanner-check-item-description" v-show="showDetails">
      <p class="scanner-check-item-description-title" v-html="scanresult.description"></p>
      <p class="scanner-check-item-description-report" v-if="scanresult.report" v-html="scanresult.report"></p>
      <div style="clear: both;"></div>
      <small v-show="!scanresult.has_error"><a :href="scanresult.link"
                target="_blank">{{ $t('messages.background_info') }}</a></small>
      <div style="clear: both;"></div>
      <ul class="scanner-check-item-details" v-show="showDetails">
        <li v-for="(detail) in scanresult.testDetails">
          <span v-html="detail.name"></span>
        </li>      </ul>
      <div style="clear: both; padding-bottom: 20px"></div>
    </div>


  </div>


</template>

<style>

  .col-85 {
    width: 70%;
    float: left;
  }

  .col-20{
    width: 30%;
    float: left;
    text-align: center;
  }

</style>
<script>
  export default {
    name: 'ScanResult',
    data () {
      return {
        'showDetails': false
      }
    },
    i18n: {
      messages: {
        de: {
          messages: {

          }
        }
      }
    },
    props: ['scanresult']
  }
</script>
