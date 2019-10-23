<template>
  <div>
    <div class="centred">
      <h1>auth</h1>
      <form class="form_auth">
        <input type="text" v-model="form.login">
        <input type="password" v-model="form.password">
      </form>
      {{form}}
    </div>  
  </div>  
</template>
<script>
export default {
    data: () => ({
      form: {
        login: '',    
        password: ''  
      }
    })
}
</script>
<style lang="scss">
  .centred{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .form_auth{
    display: flex;
    flex-direction: column;
    width: 20%;
    & input{
      border: 1px solid black;
      border-radius: 2.5rem;
      padding: 1rem;
    }
  }
</style>
