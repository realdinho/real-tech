<template lang="pug">
  div.admin-new-post-page
    section.new-post-form
      admin-post-form(@save-post="onSubmitted")
</template>

<script>
import AdminPostForm from '@/components/forms/AdminPostForm'

export default {
  layout: 'admin',
  middleware: ['auth', 'check-auth'],
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => this.$router.push('/admin'))
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