<template>
<router-link
:to="{name: 'post.single', params: {id: post.id}}">
    <div class="p-4 border mb-4 rounded flex items-center cursor-pointer transition hover:scale-110">
    <img :src="checkImg(post.thumbnail_url)" @error="post.thumbnail_url='https://placehold.jp/48x48.png'" class='w-12 h-12 rounded mr-10'/>
    <div>
        <p>{{post.name}}</p>
        <p>Price: <i>${{post.price}}</i></p>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    checkImg(url) {
      if (url !== null) {
        return url
      } else {
        return 'https://placehold.jp/48x48.png'
      }
    }
  }
}
</script>

<style>

</style>