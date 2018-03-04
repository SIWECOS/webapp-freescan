<template>
  <div class="scanner-check-item-data" v-if="scanresult.scoreTypeRaw !== 'hidden'">
    <div class="col-20">
        <span class="round-check"
              v-bind:class="{ 'score-red': scanresult.score < 30, 'score-yellow': scanresult.score >= 30 && scanresult.score < 80, 'score-green': scanresult.score >=80 }">
            {{ scanresult.scoreType }}: {{ scanresult.score }}
        </span>
    </div>
    <div class="col-85">
      <span class="scanner-check-data">{{ scanresult.name}}</span>
    </div>
    <div class="col-20">
      <button class="btn btn-primary" v-on:click="showDetails = (showDetails) ? 0 : 1">{{ $t('messages.more_info') }}
      </button>
    </div>
 <div style="clear: both"></div>
    <div class="scanner-check-item-description" v-show="showDetails">
      <p class="scanner-check-item-description-title">{{ scanresult.description }}</p>
      <p class="scanner-check-item-description-report" v-if="scanresult.report">{{ scanresult.report }}</p>
      <small><a :href="'https://www.siwecos.de/wiki/' + scanresult.name" :title="$t('messages.more_info')"
                target="_blank">{{ $t('messages.more_info') }} &gt;&gt;</a></small>

      <ul class="scanner-check-item-details" v-show="showDetails">
        <li v-for="(detail) in scanresult.testDetails">{{ detail.name }}</li>
      </ul>
    </div>


  </div>


</template>

<style>
  .col-15 {
    width: 15%;
    float: left;
  }

  .col-85 {
    width: 60%;
    float: left;
  }

  .col-20{
    width: 20%;
    float: left;
  }

  .score-red {
    color: red;
  }

  .score-yellow {
    color: blue;
  }

  .score-green {
    color: green;
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
            more_info: 'Mehr Informationen'
          }
        }
      }
    },
    props: ['scanresult']
  }
</script>
