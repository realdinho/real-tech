import vue from 'vue'

import PostList from '@/components/posts/PostList'
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

vue.component('AppButton', AppButton)
vue.component('AppControlInput', AppControlInput)
vue.component('PostList', PostList)