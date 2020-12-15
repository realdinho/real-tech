<template lang="pug">
  div.admin-new-post-page
    section.new-post-form
      admin-post-form
</template>

<script>
import AdminPostForm from '@/components/forms/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
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