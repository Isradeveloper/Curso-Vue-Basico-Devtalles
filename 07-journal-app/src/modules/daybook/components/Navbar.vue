<template>
  <nav class="navbar navbar-light bg-primary">
    
    <a class="navbar-brand text-white">
      <img src="@/assets/logo.png" width="30" height="30" alt="vue-logo" class="d-inline-block align-text-top mx-2" />
      {{ username }}
    </a>

    <div class="d-flex mx-2">
      <button class="btn btn-outline-danger" @click="onLogout">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
    
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useAuth from '@/modules/auth/composables/useAuth';

export default {
  name: 'navbar-component',
  setup() {

    const router = useRouter()
    const { username, logout } = useAuth()

    return {
      username,
      onLogout: () => {
        router.push({name: 'login'})
        logout()
      }
    }

  }
}

</script>