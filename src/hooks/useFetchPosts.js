import API from '@/services/API.js'
import { ref, onMounted } from 'vue'

export function useFetchPosts(Adata) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)
    const fetching = async () => {
        try {
            const {data} = await API.get('/courses', {
                params: {
                    _page: 1,
                    _limit: Adata.postsLimit,
                    per_page: 10
                }
            })

            totalPages.value = Math.ceil(data.data.length / data.postsLimit)
            posts.value = data.data;
        } catch (e) {
            console.log(e)
        } finally {
            isPostsLoading.value = false;
        }
    }
    onMounted(async () => await fetching())
    return {
        posts, isPostsLoading, totalPages
    }
} 


export function useFetchSinglePost(data) {
    const post = ref([])
    const isPostsLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await API.get('/courses/' + data.id)
            post.value = response.data.data;
        } catch (e) {
            console.log(e)
        } finally {
            isPostsLoading.value = false;
        }
    }
    onMounted(async () => await fetching())
    return {
        post, isPostsLoading
    }

} 
