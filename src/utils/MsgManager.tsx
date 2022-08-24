import * as React from "react";
import Swal from "sweetalert2";

export interface IMsgManagerProps {
  icon?: string;
  title?: string;
  text?: string;
}

export function MsgManager(props: IMsgManagerProps | any = null) {
  return Swal.fire(props);
}
