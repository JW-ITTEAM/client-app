import * as React from "react";

export interface ISpinnerProps {}

export default class Spinner extends React.Component<ISpinnerProps> {
  public render() {
    return (
      <div>
        <div className="spinner-wrapper">
          <div className="donut"></div>
        </div>
      </div>
    );
  }
}
