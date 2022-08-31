import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ShipmentStore from "./shipmentStore";

interface Store {
  commonStore: CommonStore;
  shipmentStore: ShipmentStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  shipmentStore: new ShipmentStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
