import { Observable } from 'tns-core-modules/data/observable';
import { IotWifi } from 'nativescript-iot-wifi';

export class HelloWorldModel extends Observable {
  public message: string;
  private iotWifi: IotWifi;

  constructor() {
    super();

    this.iotWifi = new IotWifi();
    this.message = this.iotWifi.message;
  }
}
