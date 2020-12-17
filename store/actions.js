import Cookie from 'js-cookie'

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
    if(!authData.isLogin) {
      authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    }

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
        vuexContext.commit('setToken', res.idToken)
        localStorage.setItem('token', res.idToken)
        localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
        Cookie.set('jwt', res.idToken)
        Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
        // vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000)
      })
      .catch(e => console.log(e))
  },
  // setLogoutTimer(vuexContext, duration) {
  //   setTimeout(() => {
  //     vuexContext.commit('clearToken')
  //   }, duration)
  // },
  initAuth(vuexContext, req) {
    let token;
    let expirationDate;

    if (req) {
      if (!req.headers.cookie) { 
        return 
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))

      if (!jwtCookie) { 
        return 
      }
      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }

    if (new Date().getTime() > +expirationDate || !token) { 
      console.log('no token or invalid token')
      vuexContext.commit('clearToken')
      return 
    }
    
    // vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
    vuexContext.commit('setToken', token)
  }
}