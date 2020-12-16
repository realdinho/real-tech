import axios from 'axios'

export default {
  nuxtServerInit(vuexContext, context) {
    return axios.get('https://real-tech-d036d-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        // console.log(res);
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
  }
}