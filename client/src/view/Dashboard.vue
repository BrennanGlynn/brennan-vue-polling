<template>
  <content-module name="dashboard">

  </content-module>
</template>
<script>
  import { poll as pollRes } from 'resources'
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
    created () {
      this.fetch()
    }
  }
</script>
