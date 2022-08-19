import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosConn from "../../utils/ApiConnection";

export interface IIntgBoardProps {}

export default function IntgBoard(props: IIntgBoardProps) {
  const [oims, setOims] = React.useState([]);
  const history = useHistory();

  useEffect(() => {
    axiosConn.get("/api/Shipments/getOceanImportList").then((response) => {
      setOims(response.data);
    });
  }, []);

  const fetchDetail = (refNo: string) => {
    // setIsLoading(true);
    history.push({
      pathname: "/shipments/intg_ocean_detail/" + refNo,
      state: { refNo: refNo },
    });
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">SHIPMENTS</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">SHIPMENTS</li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="card stretch-card">
          <div className="card-body">
            <div className="row mb-1">
              <div className="col-lg-4">
                <select className="form-control">
                  <option>OCEAN</option>
                  <option>AIR</option>
                </select>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="SEARCH"
                />
              </div>
              <div className="col-lg-4 text-right">
                <button className="btn btn-primary">CREATE</button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>REFERENCE</th>
                      <th>MASTER B/L</th>
                      <th>HOUSE B/L</th>
                      <th>CUSTOMER</th>
                      <th>POL</th>
                      <th>POD</th>
                      <th>ETD</th>
                      <th>ETA</th>
                      <th>STATUS</th>
                      <th>A/N</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oims.map((data: any) => (
                      <tr
                        key={data.oim.f_RefNo}
                        onClick={() => fetchDetail(`${data.oim.f_RefNo}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{data.oim?.f_RefNo ?? ""}</td>
                        <td>{data.oim?.f_MBLNo ?? ""}</td>
                        <td>{data.oih?.f_HBLNo ?? ""}</td>
                        <td></td>
                        <td>{data.oim?.f_LoadingPort ?? ""}</td>
                        <td></td>
                        <td>{data.oim?.f_ETD ?? ""}</td>
                        <td>{data.oim?.f_ETA ?? ""}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
