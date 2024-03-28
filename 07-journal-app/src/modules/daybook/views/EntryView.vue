<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div class="d-flex align-items-center">
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="fs-3 mx-1">{{ month }}</span>
        <span class="fs-4 fw-ligth">{{ year }}, {{ weekday }}</span>
      </div>

      <div>

        <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false" accept="image/*">

        <button
          v-if="id !== 'new'"
          @click="onDeleteEntry()"
          class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2" @click="onSelectImage()">
          Subir foto <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
    </div>
  </template>

  <fab-component
    icon="fa-save"
    @evento-personalizado="saveEntry()"
  />

  <img
    v-if="entry.picture && !localImage"
    :src="entry.picture"
    alt="entry-picture"
    class="img-thumbnail"
  />

  <img
    v-if="localImage"
    :src="localImage"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from 'vuex';
import getDayMonthYear from "../helpers/getDayMonthYear";
import Swal from 'sweetalert2';
import uploadImage from '@/modules/daybook/helpers/uploadImage';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    "fab-component": defineAsyncComponent(() =>
      import("../components/Fab.vue")
    ),
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null
    };
  },
  created() {
    // console.log(this.$route);
    this.loadEntry();
  },
  methods: {
    loadEntry() {

      let entry;
      this.localImage = null

      if (this.id == 'new') {
        this.entry = {
          text: "",
          date: new Date().toDateString()
        }
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "daybook-no-entry" });
        this.entry = entry;
      }
    },
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
    async saveEntry() {
      
      new Swal({
        title: 'Espere, por favor...',
        allowOutsideClick: false
      })
      Swal.showLoading()

      const picture = await uploadImage(this.file)
      this.entry.picture = picture

      if (this.entry.id) {
        await this.updateEntry(this.entry)
      
      } else {
        //Crear
        const newId = await this.createEntry(this.entry)
        this.$router.push({name: 'daybook-entry', params: {id: newId}})
      }

      this.file = null
      this.localImage = null
      Swal.fire('Guardado', 'Entrada registrada con éxito', "success")

    },
    async onDeleteEntry() {

      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Una vez borrado, no se puede recuperar',
        showDenyButton: true,
        confirmButtonText: 'Si, estoy seguro'
      })

      if (result.isConfirmed) {

        new Swal({
          title: 'Espere, por favor...',
          allowOutsideClick: false
        })
        Swal.showLoading()

        await this.deleteEntry(this.entry.id)
        this.$router.push({name: 'daybook-no-entry'}) 

        Swal.fire('Eliminado', 'Entrada eliminada con éxito', "success")
      }

    },
    onSelectedImage({target}) {
      const file = target.files[0]
      if (!file){
        this.localImage = null
        this.file = null
        return
      }

      this.file = file
      
      const fr = new FileReader()
      fr.onload = () => this.localImage = fr.result
      fr.readAsDataURL(file)
    },
    onSelectImage(){
      this.$refs.imageSelector.click()
    }
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      return getDayMonthYear(this.entry.date).day;
    },
    month() {
      return getDayMonthYear(this.entry.date).month;
    },
    year() {
      return getDayMonthYear(this.entry.date).year;
    },
    weekday() {
      return getDayMonthYear(this.entry.date).weekday;
    },
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>