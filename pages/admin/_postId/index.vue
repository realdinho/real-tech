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
    return axios.get(`https://real-tech-d036d-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onEditPost(editedPost) {
      axios.put(
        `https://real-tech-d036d-default-rtdb.firebaseio.com/posts/${this.$route.params.postId}.json`,
        editedPost
      )
      .then(res => {
        console.log(res)
        this.$router.push('/admin')
      })
      .catch(e => console.log(e))
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
