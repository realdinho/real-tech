import axios from 'axios'

export default {
  nuxtServerInit(vuexContext, context) {
    return axios
      .get(`${process.env.baseUrl}/posts.json`)
      .then(res => {
        const postArray = []
        for (const key in res.data) {
          postArray.push({ ...res.data[key], id: key })
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
    return axios
      .post(`${process.env.baseUrl}/posts.json`, createdPost)
      .then(res => {
        vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
      })
      .catch(e => console.log(e))
  },
  editPost(vuexContext, editedPost) {
    return axios
      .put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  }
}