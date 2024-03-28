// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi"

// }

export const loadEntries = async ({commit}) => {

  const {data} = await journalApi.get('/entries.json')

  if (!data) {
    commit('setEntries', [])
  }

  const entries = []
  
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }

  commit('setEntries', entries)

}

export const updateEntry = async ({commit}, entry) => {

  //* SEPARAMOS EL ID DEL RESTO
  const {id, ...rest} = entry
  const dataToSave = {...rest}

  const resp = await journalApi.put(`/entries/${id}.json`, {
    ...dataToSave
  })

  console.log(resp);

  commit('updateEntry', {...entry})

}

export const createEntry = async ({commit}, entry) => {

  const {text, picture, date} = entry
  const dataToSave = {text, picture, date}

  const {data} = await journalApi.post('/entries.json', dataToSave)
  const {name: id} = data;
  dataToSave.id = id;
  commit('addEntry', dataToSave)
  return dataToSave.id
}

export const deleteEntry = async ({commit}, id) => {

  const resp = await journalApi.delete(`/entries/${id}.json`)
  console.log(resp);

  commit('deleteEntry', id)

}