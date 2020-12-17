<template lang="pug">
  div.admin-post-page
    section.update-form
      admin-post-form(:post="loadedPost" @save-post="onEditPost")
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/forms/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onEditPost(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
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
