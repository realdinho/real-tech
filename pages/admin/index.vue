<template lang="pug">
  div(class="admin-page")
    section(class="new-post")
      app-button(@click="$router.push('/admin/new-post')") Create Post
    section(class="existing-posts")
      h1 Existing Posts
      post-list(isAdmin)
</template>

<script>
import PostList from '@/components/posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
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