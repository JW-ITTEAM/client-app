import * as React from "react";
import Swal from "sweetalert2";

export interface IMsgManagerProps {
  icon?: string;
  title?: string;
  text?: string;
  error?: any;
}

export function MsgManager(props: IMsgManagerProps | any = null) {
  if (props.error) {
    props.icon = "error";
    props.title = props.error.code;
    props.text = props.error.message;
  }
  return Swal.fire(props);
}
