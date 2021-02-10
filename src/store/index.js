import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["React Native", "React Js"],
};

function courses(state = INITIAL_STATE, action) {
  //reducer da aplicação
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] }; //o action.title title seria o valor que eu vou receber e inserir no data do meu reducer
  }
  return state; //caso nem um type corresponda nos cases, é retornado o state sem alteração
}

const store = createStore(courses);

export default store;
