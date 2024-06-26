import axios from "axios"

const uploadImage = async (file) => {

  if (!file) return

  try {
    
    const formData = new FormData()
    formData.append('upload_preset', 'curso-vue')
    formData.append('file', file)

    const url = 'https://api.cloudinary.com/v1_1/djh8rm9om/image/upload'
    const {data} = await axios.post(url, formData)
    
    return data.secure_url

  } catch (error) {
    console.log('Error al cargar la imagen');
    console.error(error)
    return null
  }

}

export default uploadImage