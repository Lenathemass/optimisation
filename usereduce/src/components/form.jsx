import { useReducer } from "react";
import { reducer, initialState } from "../reducers/formReducer";

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "update",
            field: "name",
            value: e.target.value
          })
        }
      />

      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "update",
            field: "email",
            value: e.target.value
          })
        }
      />

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

      <h3>{state.name}</h3>
      <h3>{state.email}</h3>
    </div>
  );
}