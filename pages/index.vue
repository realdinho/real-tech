<template lang="pug">
  div(class="home-page")
    section(class="intro")
      h1 Get the latest tech news!
    post-list(:posts="loadedPosts")
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '3',
              title: 'Machine Learning',
              previewText: 'Come and discover how enterprises are using machine learning to improve their daily tasks',
              thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg'
            },
            {
              id: '1',
              title: 'Enterprise Smart Assistant',
              previewText: 'This article describes the smart solutions in an enterprise context',
              thumbnail: 'https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg'
            },
            {
              id: '2',
              title: 'Cloud Computing',
              previewText: 'Most enterprises are now using Cloud Computing to save costs and automate their functionalities',
              thumbnail: 'https://sm.mashable.com/mashable_in/seo/1/13445/13445_5s8f.jpg'
            }
          ]
        })
      }, 3000)
      // reject(new Error())
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e)
    })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  },
  head: {
    title: 'Home'
  }
}
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-bg.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>