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
      .$put(`${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  },
  authenticateUser(vuexContext, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    if(!authData.isLogin) authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='

    return this.$axios
      .$post(
        authUrl + process.env.fbApiKey, 
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        console.log(res)
        vuexContext.commit('setToken', res.idToken)
        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
      })
      .catch(e => console.log(e))
  },
  setLogoutTimer(vuexContext, duration) {
    setTimeout(() => {
      vuexContext.commit('clearToken')
    }, duration)
  }
}