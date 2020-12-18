<template lang="pug">
  div(class="admin-page")
    section(class="existing-posts")
      post-list(:is-admin="isAdmin" :posts="loadedPosts")
</template>

<script>
export default {
  // layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    isAdmin() {
      return this.$store.getters.isAuthenticated
    }
  },
  head() {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
</style>