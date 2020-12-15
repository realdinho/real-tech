<template lang="pug">
  div(class="posts-page")
    post-list
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  components: {
    PostList
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