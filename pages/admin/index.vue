<template lang="pug">
  div(class="admin-page")
    section(class="new-post")
      app-button(@click="$router.push('/admin/new-post')") Create Post
      app-button(@click="onLogout" style="margin-left: 10px;") Logout
    section(class="existing-posts")
      h1 Existing Posts
      post-list(isAdmin :posts="loadedPosts")
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
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

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>