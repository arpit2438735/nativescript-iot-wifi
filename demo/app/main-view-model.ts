import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
import { IotWifi } from 'nativescript-iot-wifi';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
    let iotWifit = new IotWifi();

    const wifiSSID = iotWifit.getSSID();
    console.log(wifiSSID);

    iotWifit.connect(wifiSSID, 'password', false, (data)=> {
      console.log(data);
    });
  }
}
