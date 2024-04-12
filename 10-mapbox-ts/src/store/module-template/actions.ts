import { Action, ActionTree } from 'vuex';
import { ExampleStateInterface } from './state'
import { State as StateInterface } from '../index';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {

  someAction(/*{commit}, payload*/){

  }

}

export default actions;