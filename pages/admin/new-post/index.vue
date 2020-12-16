<template lang="pug">
  div.admin-new-post-page
    section.new-post-form
      admin-post-form(@save-post="onSubmitted")
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/forms/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      axios.post(
        'https://real-tech-d036d-default-rtdb.firebaseio.com/posts.json', 
        { 
          ...postData, 
          updatedDate: new Date() 
        }
      )
      .then(result => {
        console.log(result)
        this.$router.push('/admin')
      })
      .catch(e => console.log(e))
    }
  },
  head: {
    title: 'New Post'
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>