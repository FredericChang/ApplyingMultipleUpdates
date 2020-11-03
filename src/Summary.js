import React from "react";
import { CallbackButton } from "./CallbackButton";
import { SimpleButton } from "./SimpleButton";

export function Summary(props) {
  return (
    <React.Fragment>
      <td>{props.index + 1} </td>
      <td>{props.name} </td>
      <td>{props.name.length} </td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={props.reverseCallback}
        >
          Change
        </button>
        <button
          className="btn btn-info btn-sm m-1"
          onClick={() => props.promoteCallback(props.name)}
        >
          Promote
        </button>
        <CallbackButton callback={props.reverseCallback} />
        <CallbackButton
          theme="info"
          text="Promote"
          callback={() => props.promoteCallback(props.name)}
          disabled="true"
        />
        <SimpleButton
          className="btn btn-warning btn-sm m-1"
          callback={props.reverseCallback}
          text={`Reverse (${props.name})`}
        />
        <SimpleButton
          className="btn btn-info btn-sm m-1"
          callback={() => props.promoteCallback(props.name)}
          text={`Promote (${props.name})`}
        />
      </td>
    </React.Fragment>
  );
}
//if you didn't invoke a function prop with an argument.
