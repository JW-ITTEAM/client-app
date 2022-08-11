import * as React from "react";
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
            <div className="card-header">B/L</div>
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
                    <td colSpan={colspan_val}>HOUSE B/L NO</td>
                    <td colSpan={colspan_val} className="text-right">
                      SCVAVNNYC2208186
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>SHIPPER</td>
                    <td colSpan={colspan_val} className="text-right">
                      VIETNAM TASK APPAREL JOINT STOCK COMPANY
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>SHIPPER OF PRODUCT</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CONSIGNEE</td>
                    <td colSpan={colspan_val} className="text-right">
                      PT MERIDIAN GLOBAL INDONESIA
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CONSIGNEE OF PRODUCT</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CUSTOMER</td>
                    <td colSpan={colspan_val} className="text-right">
                      SUPER CARGO SERVICE CO., LTD.
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>NOTIFY PARTY</td>
                    <td colSpan={colspan_val} className="text-right">
                      ONE STEP UP LTD
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>B/L ACCT CARRIER</td>
                    <td colSpan={colspan_val} className="text-right">
                      WAN HAI (Z952)
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>
                      B/L NUMBER OF SHIPPER FORWARDING
                    </td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>AMS/ISF NO</td>
                    <td colSpan={colspan_val} className="text-right">
                      JWIC92443568295
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CUSTOMER REF NO</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>VESSEL</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>VOYAGE NUMBER</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CY LOCATION</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header">CONTAINER</div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td colSpan={colspan_val}>CONTAINER NO</td>
                    <td colSpan={colspan_val} className="text-right">
                      WHSU5267547
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>SEAL NO</td>
                    <td colSpan={colspan_val} className="text-right">
                      WHLR354430
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>CONTAINER SIZE</td>
                    <td colSpan={colspan_val} className="text-right">
                      40' HQ
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>PACKAGE</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>COMMODITY</td>
                    <td colSpan={colspan_val} className="text-right">
                      GARMENTS
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>GROSS WEIGHT CARGO</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>TARE</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>MEASUREMENT</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>DELIVERY TYPE</td>
                    <td colSpan={colspan_val} className="text-right">
                      CYCY
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>ISSUE DATE</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>FCL/LCL</td>
                    <td colSpan={colspan_val} className="text-right">
                      FCL
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>FREE NOMI CO-LOAD</td>
                    <td colSpan={colspan_val}></td>
                  </tr>
                  <tr>
                    <td colSpan={colspan_val}>EXPRESS RELEASE</td>
                    <td colSpan={colspan_val}></td>
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
            <div className="card-header">MOVING POINT</div>
            <div className="card-body">
              <table className="table">
                <tbody>
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
                    <td>PLACE OF DELIVERY</td>
                    <td className="text-right">NEW YORK, NY</td>
                    <td>DELIVERY ETA</td>
                    <td className="text-right">09-18-2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
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
