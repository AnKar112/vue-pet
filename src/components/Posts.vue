<template>
    <div v-if="isPostsLoading" class="flex justify-center w-full">
        <img src='@/assets/img/loader.gif' />
    </div>
    <div v-else class="flex flex-col w-full">
        <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
        />
    </div>
</template>

<script>

import { useFetchPosts } from '@/hooks/useFetchPosts.js'
import PostItem from "@/components/PostItem.vue";
export default {
    components: {PostItem},
    setup() {
        const {posts, isPostsLoading, totalPages} = useFetchPosts({
            postsLimit: 5
        })
        return {
            posts, isPostsLoading, totalPages
        }
    }
}
</script>

<style>

</style>