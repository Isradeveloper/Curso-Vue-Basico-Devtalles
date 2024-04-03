<template>
  <q-page class="q-pa-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-xs q-pt-xl">
          <q-input filled v-model="userForm.email" label="Correo electrónico *" hint="Name and surname" type="email"
            lazy-rules :rules="[
          (val) => (val && val.length > 0) || 'Este campo es obligatorio',
          isValidEmail
        ]" />

          <q-input type="password" v-model="userForm.password1" label="Contraseña *" lazy-rules :rules="[
          (val) => (val && val.length > 0) || 'Este campo es obligatorio',
        ]" />

          <q-input type="password" v-model="userForm.password2" label="Repetir Contraseña *" lazy-rules :rules="[
          (val) => (val && val.length > 0) || 'Este campo es obligatorio',
          isSamePassword
        ]" />

          <q-checkbox v-model="userForm.conditions" label="Acepto los términos y condiciones de uso" :style="userForm.errorInConditions && !userForm.conditions && 'color: red'"/>


          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

          <div>
            <q-btn label="Submit" type="submit" color="primary" unelevated />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" unelevated="" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar()

const userForm = ref({
  email: "",
  password1: "",
  password2: "",
  conditions: false,
  errorInConditions: false,
});

const onSubmit = () => {

  userForm.value.errorInConditions = false

  if (!userForm.value.conditions) {
    console.log('Debe de aceptar las condiciones');
    userForm.value.errorInConditions = true
    $q.notify({
      message: 'Debes aceptar los términos y condiciones',
      color: 'red'
    })
    return
  }

  console.log(userForm);
}

const onReset = () => {
  userForm.value = {
    email: "",
    password1: "",
    password2: "",
    conditions: false,
    errorInConditions: false,
  }
}

const isValidEmail = (val) => {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || 'El correo no parece ser válido';
}

const isSamePassword = (val) => {
  return (val === userForm.value.password1) || 'Las contraseñas no son iguales'
}

defineOptions({
  name: "DialogsPage",
});
</script>
