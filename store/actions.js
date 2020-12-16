import axios from 'axios'

export default {
  nuxtServerInit(vuexContext, context) {
    return axios
      .get('https://real-tech-d036d-default-rtdb.firebaseio.com/posts.json')
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
      .post('https://real-tech-d036d-default-rtdb.firebaseio.com/posts.json', createdPost)
      .then(res => {
        vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
      })
      .catch(e => console.log(e))
  },
  editPost(vuexContext, editedPost) {
    return axios
      .put(`https://real-tech-d036d-default-rtdb.firebaseio.com/posts/${editedPost.id}.json`, editedPost)
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  }
}