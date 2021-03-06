export default [{
  path: '/dashboard',
  component: (resolve) => {
    import('../view/Dashboard.vue').then(resolve)
  },
  meta: {
    skipAuth: true
  }
}, {
  path: '/users',
  component: (resolve) => {
    import('../view/UserList.vue').then(resolve)
  }
}, {
  path: '/things',
  component: (resolve) => {
    import('../view/ThingList.vue').then(resolve)
  }
}, {
  path: '/polls',
  component: (resolve) => {
    import('../view/PollList.vue').then(resolve)
  }
}, {
  path: '/polls/:id',
  component: (resolve) => {
    import('../view/SinglePoll.vue').then(resolve)
  },
  meta: {
    skipAuth: true
  }
}, {
  path: '/me',
  component: (resolve) => {
    import('../view/MyPolls.vue').then(resolve)
  }
}]
