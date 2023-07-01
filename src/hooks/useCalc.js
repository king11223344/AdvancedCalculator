import { useReducer } from 'react';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  RESET: 'reset',
  DELETE_DIGIT: 'delete',
  EVAL: 'eval',
};

const evaluation = function (calcExp) {
  try {
      let answer = eval(calcExp);
      return answer.toString();
    
  }
  catch{
    return "INVALID EXP"
  }
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        displayExp: state.displayExp + payload.dchar,
        caclExp: state.caclExp + payload.cchar,
      }
    case ACTIONS.DELETE_DIGIT:
      return{
        displayExp: state.displayExp.slice(0, -1),
        caclExp: state.caclExp.slice(0, -1),
      }

    case ACTIONS.EVAL:
      const answer = evaluation(state.caclExp);
      if(answer === "INVALID EXP"){
        return{
          displayExp: "",
          caclExp: "",
          aboveDis: "INVALID EXP",
        }
      }
      else{
        return{
          displayExp: answer,
          caclExp: answer,
          aboveDis: state.displayExp,
        }
      }

    case ACTIONS.RESET:
      return {
        displayExp: '',
        caclExp: '',
        aboveDis: '',
      };

    default:
      return state;
  }
}

export default function useCalc() {
  const [{ displayExp,caclExp,aboveDis }, dispatch] = useReducer(
    reducer,
    { displayExp: '',caclExp: "",aboveDis: ''}
  );

  return { displayExp,caclExp,aboveDis , dispatch };
}
