export default {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .$get(`${process.env.baseUrl}/posts.json`)
      .then(data => {
        const postArray = []
        for (const key in data) {
          postArray.push({ ...data[key], id: key })
        }
        vuexContext.commit('setPosts', postArray)
      })
      .catch(e => context.error(e))
  }, 
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
  addPost(vuexContext, post) {
    const createdPost = { 
      ...post, 
      updatedDate: new Date() 
    }
    return this.$axios
      .$post(`${process.env.baseUrl}/posts.json`, createdPost)
      .then(data => {
        vuexContext.commit('addPost', { ...createdPost, id: data.name })
      })
      .catch(e => console.log(e))
  },
  editPost(vuexContext, editedPost) {
    return this.$axios
      .$put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  }
}