<template lang="pug">
  form(@submit.prevent="onSave")
    AppControlInput(v-model="editedPost.author") Author Name:
    AppControlInput(v-model="editedPost.title") Title:
    AppControlInput(v-model="editedPost.thumbnailLink") Thumbnail Link:
    AppControlInput(v-model="editedPost.previewText") Preview Text:
    AppControlInput(control-type="textarea" v-model="editedPost.content") Content:
    AppButton(type="submit") Save
    AppButton(type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel") Cancel
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post 
      ? { ...this.post } 
      : {
        author: '',
        title: '',
        thumbnailLink: '',
        content: '',
        previewText: ''
      }
    }
  },
  methods: {
    onSave() {
      // console.log(this.editedPost)
      this.$emit('save-post', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>