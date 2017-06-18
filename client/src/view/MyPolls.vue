<template>
  <div>
    Hello {{username}}!
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['username'])
    },
    methods: {
      fetch () {
        console.log('Grabbing ' + this.username + '\'s polls')
      }
    },
    created () {
      this.fetch()
    }
  }
</script>
<style></style>
