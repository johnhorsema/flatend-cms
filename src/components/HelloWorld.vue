<template>
  <h1>Today is: {{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    fetch("/index").then(d => d.text()).then(today => {
      this.msg = today
    })
  },
  data() {
    return {
      count: 2,
      msg: 'not set'
    }
  }
}
</script>
