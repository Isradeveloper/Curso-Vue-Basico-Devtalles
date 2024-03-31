// export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
  state.isLoading = true
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = ( state, entry ) => {
  state.isLoading = true
  const index = state.entries.findIndex((item) => item.id == entry.id)
  state.entries[index] = entry
  state.isLoading = false
}

export const addEntry = ( state, entry ) => {
  state.isLoading = true
  state.entries = [entry, ...state.entries]
  state.isLoading = false
}

export const deleteEntry = (state, id) => {
  state.isLoading = true
  state.entries = state.entries.filter((item) => item.id != id);
  state.isLoading = false
}

export const clearEntries = (state) => {
  state.entries = []
}