import {createStore} from 'redux';

function reducer(){
  return {
    isGood: true,
    isBad: false,  
  };
}

const store = createStore(reducer);

export default store;
