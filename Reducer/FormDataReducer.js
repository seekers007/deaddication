const initialStateFormData = {
  form1: {
    field1: '',
    field2: '',
    field3: '',
  },
  form2: {},
  form3: {},
  form4: {},
};
const FormDataReducer = (state, action) => {
  switch (action.type) {
    case '1':
      break;
    case '2':
      return {...state, form1: {...state.form1, field1: action.payload}};
    case 'RESET':
      return initialStateFormData;
    default:
      console.log('the default case is executed ');
  }
};

/*
  const [state, dispatch] = useReducer(reducer, initalState);
*/

export {FormDataReducer, initialStateFormData};
