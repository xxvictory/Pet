<template>
  <div>
    <router-view></router-view>
    <TabbarNav />
  </div>
</template>
<script>
import TabbarNav from '../components/TabbarNav'
export default {
  components: {
    TabbarNav
  }
}
</script>
