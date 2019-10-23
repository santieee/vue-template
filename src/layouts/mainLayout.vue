<template>
  <div>
    <header-cp />
    <router-view />
  </div>
</template>
<script>
  import headerCp from '@/components/layouts/header'
  export default{
    data:() => ({

    }),
    components:{
      headerCp
    }
  }
</script>
<style lang="scss">
  #app{

  }
</style>
