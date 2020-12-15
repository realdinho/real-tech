import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
            ])
            resolve();
          }, 3000)
        })
      }, 
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore