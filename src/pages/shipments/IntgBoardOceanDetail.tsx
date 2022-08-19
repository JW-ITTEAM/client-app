import { useLocation } from "react-router-dom";
import { ActivityLog } from "../../components/activityLog/ActivityLog";
import ActivityLogEvent from "../../components/activityLog/ActivityLogEvent";

export interface IIntgBoardOceanDetailProps {}

export default function IntgBoardDetail(props: IIntgBoardOceanDetailProps) {
  const location: any = useLocation();
  const colspan_val = 2;
  return (
    <div>
      <div className="page-header">
        <h3
          className="page-title"
          style={{ marginTop: "11px", marginBottom: "11px" }}
        >
          {location.state.refNo}
        </h3>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">MASTER</div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td colSpan={colspan_val}>MASTER B/L NO</td>
                    <td colSpan={colspan_val} className="text-right">
                      WHLC040CA05217
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>SHIPPER</td>
                    <td colSpan={colspan_val} className="text-right">
                      SHIPPER NAME
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CONSIGNEE</td>
                    <td colSpan={colspan_val} className="text-right">
                      PT MERIDIAN GLOBAL INDONESIA
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>NOTIFY</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CARRIER</td>
                    <td colSpan={colspan_val} className="text-right"></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>ISSUE DATE</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header">HOUSE</div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td colSpan={colspan_val}>HOUSE B/L NO</td>
                    <td colSpan={colspan_val} className="text-right">
                      WHSU5267547
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }}>CUSTOMER</td>
                    <td style={{ width: "25%" }} className="text-right">
                      WHLR354430
                    </td>
                    <td>CUST REF NO.</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SHIPPER</td>
                    <td className="text-right"></td>
                    <td>CONSIGNEE</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>NOTIFY</td>
                    <td></td>
                    <td>ISSUE DATE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="card h-100">
            <div className="card-header">SHIPPING</div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>VESSEL</td>
                    <td></td>
                    <td>BOOKING NO.</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>VOYAGE</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }}>PORT OF LOADING</td>
                    <td style={{ width: "25%" }} className="text-right">
                      SHEKOU, CHINA
                    </td>
                    <td>ETD</td>
                    <td className="text-right">08-18-2022</td>
                  </tr>
                  <tr>
                    <td>PORT OF DISCHARGE</td>
                    <td className="text-right">NEW YORK, NY</td>
                    <td>ETA</td>
                    <td className="text-right">09-18-2022</td>
                  </tr>
                  <tr>
                    <td>FINAL DELIVERY</td>
                    <td className="text-right">NEW YORK, NY</td>
                    <td>FINAL ETA</td>
                    <td className="text-right">09-18-2022</td>
                  </tr>
                  <tr>
                    <td>DELIVERY TYPE</td>
                    <td></td>
                    <td>CY/CFS LOCATION</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>RECEIPT OF PLACE</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">RAIL</div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td style={{ width: "33.3%" }}>IT NO</td>
                    <td></td>
                    <td style={{ width: "33.3%" }}>IT PLACE</td>
                    <td></td>
                    <td style={{ width: "33.3%" }}>IT DATE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <tr>
                  <td>FCL/LCL</td>
                  <td></td>
                  <td>FREE/NOMI/CO-LOAD</td>
                  <td></td>
                </tr>
                <tr>
                  <td>EXPRESS RELEASE</td>
                  <td></td>
                  <td>AMS/ISF NO.</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">CONTAINER</div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>CONTAINER NO</th>
                    <th>SEAL NO</th>
                    <th>CONTAINER SIZE</th>
                    <th>PACKAGE</th>
                    <th>UNIT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12345</td>
                    <td>1235</td>
                    <td>40HQ</td>
                    <td>20</td>
                    <td>CNTS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header">MEMO</div>
            <div className="card-body">
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">ACTIVITY LOG</div>
            <div className="card-body">
              <ActivityLog>
                <ActivityLogEvent
                  title="John Doe sent a SMS"
                  createdAt="2016-09-12 10:06 PM"
                >
                  I received the payment for $543. Should be shipping the item
                  within a couple of hours.
                </ActivityLogEvent>
                <ActivityLogEvent
                  title="John Doe sent a SMS"
                  createdAt="2016-09-12 2:06 PM"
                  icon={<i className="mdi mdi-mail"></i>}
                >
                  Like we talked, you said that you would share the shipment
                  details? This is an urgent order and so I am losing patience.
                  Can you expedite the process and pls do share the details
                  asap. Consider this a gentle reminder if you are on track
                  already!
                </ActivityLogEvent>
              </ActivityLog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
