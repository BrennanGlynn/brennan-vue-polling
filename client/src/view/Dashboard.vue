<template>
  <content-module name="dashboard">
    From Dashboard {{polls}}
    From Component
    <poll-results v-for="(poll, index) in this.polls" :key="index" :poll="poll"></poll-results>
  </content-module>
</template>
<script>
  import { poll as pollRes } from 'resources'
  import PollResults from 'components/PollResults'
  export default {
    // todo
    data: function () {
      return {
        polls: []
      }
    },
    methods: {
      fetch () {
        pollRes.query().then(data => data.json()).then(data => {
          this.polls = data.results
        }).catch(err => {
          console.error(err)
        })
      }
    },
    components: {
      PollResults
    },
    created () {
      this.fetch()
    }
  }
</script>
