<template>
  <div class="layout">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import vHeader from '../components/header.vue'
export default {
  components: { vHeader },
}
</script>

<style scoped>
.layout {
  margin: 0 200px;
}
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #ffffff;
  border-bottom: 0.5px solid #f4f4f4;
}
.content {
  width: 100%;
  height: auto;
  padding: 20px;
}
</style>
