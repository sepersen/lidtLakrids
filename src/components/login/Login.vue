<template>
  <div class="login-container flex flex-col bg-gray">

      <h1 class="flex text-lakrids font-bold">Log ind</h1>

      <form class="flex flex-col justify-between" @submit.prevent="submit" action="">
        <input type="email" placeholder="E-mail" required>
        <input type="password" placeholder="Adgangskode" required>
        <input class="text-lg text-white font-semibold" @click="submit()"  type="submit" value="Log ind">
      </form>


  </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
      submit() {
        this.$router.push("/");
      }
    }
}
</script>

<style>

.login-container {
  max-width: ;
  height: 402px;
  margin: 251px 0 20px 585px;
}

h1 {
  margin-bottom: 81px;
}

form {
  width: 358px;
}

form>input {
  width: 280px;
  height: 60px;
  box-shadow: 0 10px 20px #d6d6d636;
  margin-bottom: 20px;
  border-radius: 13px;
  padding: 20px 25px;
}
form>input[type="submit"] {
  margin-top: 40px;
}

form:valid>input[type="submit"] {
  background-color: #30B34A;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 5px 20px #30b34a2f;
}
form:invalid>input[type="submit"] {
  background-color: #30b34a1f;
  border-radius: 30px;
  cursor: pointer;
}


input[type="submit"]:invalid {
  width: 280px;
  height: 60px;
  background-color: #30b34a1f;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: #30b34a2f;
  cursor: pointer;
}

</style>