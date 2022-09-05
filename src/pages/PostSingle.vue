<template>
    <div v-if="!isLogged">
      <p class="text-2xl">You must be logged to see posts!</p>
      <p class="text-2xl">login: teacher@akadasia.com, password: akadasia#dev#v3</p>
    </div>
    <div v-else>
        <div v-if="isPostsLoading" class="flex justify-center w-full">
            <img src='@/assets/img/loader.gif' />
        </div>
        <div v-else class="flex flex-col">
            <p>Course № {{post.id}}</p>
            <a v-if="post.intro_url" class="underline text-teal-300" :href='post.intro_url'>Youtube video</a>
            <p>Your instructors:</p>
            <div
            v-for="instructor in post.instructors"
            :key="instructor.id"
            class='p-4 border my-4 rounded flex items-center cursor-pointer transition hover:scale-110'>
                <img :src="instructor.avatar_url" class='w-12 h-12 rounded mr-4'/>
                <p>Instructor {{instructor.first_name}} {{instructor.last_name}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import { useRoute } from "vue-router"
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useFetchSinglePost } from '@/hooks/useFetchPosts.js'
import PostItem from "@/components/PostItem.vue";
export default {
    components: {PostItem},
    setup() {
        const route = useRoute()
        const store = useStore()
        const {post, isPostsLoading} = useFetchSinglePost({
            id: route.params.id
        })
        return {
            post, isPostsLoading, isLogged: computed(() => store.state.isLogged)
        }
    }
}
</script>

<style>

</style>