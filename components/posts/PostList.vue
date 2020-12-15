<template lang="pug">
  section(class="post-list")
    post-preview(
      id="1"
      :is-admin="isAdmin"
      title="Enterprise Smart Assistant"
      previewText="This article describes the smart solutions in an enterprise context"
      thumbnail="https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg"
    )
    post-preview(
      id="2"
      title="Cloud Computing"
      previewText="Most enterprises are now using Cloud Computing to save costs and automate their functionalities"
      thumbnail="https://sm.mashable.com/mashable_in/seo/1/13445/13445_5s8f.jpg"
    )
    post-preview(
      id="3"
      title="Machine Learning"
      previewText="Come and discover how enterprises are using machine learning to improve their daily tasks"
      thumbnail="https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg"
    )
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>