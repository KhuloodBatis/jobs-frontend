<template>
  <div class="mt-10 flex justify-center">

    <form action="" class="x-4/12" @submit.prevent="login">

      <h2 class="mb-4 text-2xl font-blod">Login</h2>

      <div>
        <label for="email" class="inline-block mb-1 font-medium">Email</label>
        <input type="email" name="email" id="email" class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full px-4 "
          placeholder="example@email.com" v-model="form.email">
      </div>

      <div>
        <label for="password" class="inline-block mb-1 font-medium">Password</label>
        <input type="password" name="password" id="password"
          class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full px-4 " placeholder="******"
          v-model="form.password">
      </div>


      <button type="submit" class="p-2 bg-blue-500 text-white font-medium rounded-lg mt-3">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
      login () {
        this.$axios.$get('/sanctum/csrf-cookie').then(response => {
          try {
            const csrfCookie = this.$cookies.get('XSRF-TOKEN');

            this.$axios.defaults.headers.common['X-XSRF-TOKEN'] = csrfCookie;
              // console.log( csrfCookie);
              this.$auth.loginWith('local', {
              data: this.form,
              headers: {
              'X-XSRF-TOKEN': csrfCookie
                },
                watch: false

            })

          } catch (e) {
            //
          }
        })
      }
    }

}
</script>


