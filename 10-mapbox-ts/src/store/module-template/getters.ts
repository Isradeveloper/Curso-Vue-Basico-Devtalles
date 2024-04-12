import { GetterTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { State as StateInterface } from '../index';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {

  someGetter(/* state */) {

  }

}

export default getters