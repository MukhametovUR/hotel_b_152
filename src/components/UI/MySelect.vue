<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Сортировать ...</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{option.name}}
        </option>
    </select>
</template>

<script>
export default {
name:'my-select',
props: {
    modelValue: {
        type:String
    },
    options: {
        default: () => []
    }
},
methods: {
    changeOption(event){
        this.$emit('update:modelValue',event.target.value)
    }
},

}
</script>

<style>

</style>