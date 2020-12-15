<template lang="pug">
  div.admin-post-page
    section.update-form
      admin-post-form(:post="loadedPost")
</template>

<script>
import AdminPostForm from '@/components/forms/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Realdo Dias',
        title: 'The Greatest Techs in 2020',
        thumbnailLink: 'https://sm.mashable.com/mashable_in/seo/1/13445/13445_5s8f.jpg',
        content: 'this is one the best techs in 2020'
      }
    }
  },
  head() {
    return {
      title: this.loadedPost.title
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
