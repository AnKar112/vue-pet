<template>
  <input 
  class="border-2 outline-0 w-full p-[10px] rounded-[8px] text-sm sm:text-lg "
  :class="isError ? ['border-rose-600', 'bg-rose-200'] : ['border-neutral-600', 'bg-neutral-200']"
  :value='modelValue' 
  @input="updateInput" 
  :hi="isError"
  type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number, Object],
        isError: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>

</style>