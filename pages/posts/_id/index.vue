<template lang="pug">
  div(class="single-post-page")
    section(class="post")
      h1(class="post-title") {{ loadedPost.title }}
      div(class="post-details")
        div(class="post-detail") Last updated on {{ loadedPost.updatedDate }}
        div(class="post-detail") Written by {{ loadedPost.author }}
      p(class="post-content") {{ loadedPost.content }}
    section(class="post-feedback")
      p let me know what you think about the post, send a mail to 
        a(href="mailto:feedback@realdiv.com") feedback@realdiv.com
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '3',
          title: 'Machine Learning (ID: ' + context.params.id + ')',
          author: 'Realdo Dias',
          content: 'summy dummy test that will be updated later on cause right now I have no idea of what I',
          previewText: 'Come and discover how enterprises are using machine learning to improve their daily tasks',
          thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
          updatedDate: new Date()
        }
      })
    }, 1000)
  },
  head() {
    return {
      title: this.loadedPost.title
    }
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>