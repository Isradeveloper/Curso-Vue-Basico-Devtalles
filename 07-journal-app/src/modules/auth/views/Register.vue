<template>
  <span class="login100-form-title p-b-41">
    Registrarse
  </span>
  <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit()">

    <div class="wrap-input100 validate-input" data-validate="Ingrese su nombre">
      <input class="input100" type="text" placeholder="Nombre" required v-model="userForm.name">
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese su correo">
      <input class="input100" type="email" placeholder="Correo" required v-model="userForm.email">
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese contraseña">
      <input class="input100" type="password" placeholder="Contraseña" required v-model="userForm.password">
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn">
        Sign up
      </button>

    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">Ya tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useAuth from '@/modules/auth/composables/useAuth';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

export default {
  name: 'RegisterView',
  setup() {

    const router = useRouter()
    const {createUser} = useAuth()

    const userForm = ref({
      name: '',
      email: '',
      password: ''
    })

    return {
      userForm,

      onSubmit: async() => {
        const { ok, message } = await createUser(userForm.value)
        if (!ok) {
          Swal.fire('Error', message, 'error')
        } else {
          router.push({ name: 'daybook-no-entry' })
        }
      }

    }

  }
}
</script>

<style></style>