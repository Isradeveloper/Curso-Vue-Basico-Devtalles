import { createStore } from 'vuex'

import placesModule from './places';
import { PlacesState } from './places/state';

export interface State {
  places: PlacesState
}

export default createStore<State>({
  modules: {
    places: placesModule
  }
});