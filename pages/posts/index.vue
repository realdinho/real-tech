<template lang="pug">
  div(class="posts-page")
    post-list(:posts="loadedPosts")
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  head: {
    title: 'Blog'
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>