///<reference path="./platforms/ios/IOTWifi/IOTWifi.d.ts" />
import { ios } from 'tns-core-modules/utils/utils';


export class IotWifi {
    private configManager: NEHotspotConfigurationManager;

    static isAvaliable() {
        return IOTWifi.isAvaliable();
    }

    constructor() {
        this.configManager = NEHotspotConfigurationManager.new();
    }

    connect(ssid: string, passphrase:string, isWEP:boolean = false, callback) {
        let config = NEHotspotConfiguration.alloc().initWithSSIDPassphraseIsWEP(ssid, passphrase, isWEP);

        config.joinOnce = true;

        this.configManager.applyConfigurationCompletionHandler(config, (error: NSError) => {
            if (error && error.code !== NEHotspotConfigurationError.AlreadyAssociated) {
                callback(`wifiManager.applyConfigurationCompletionHandler error code ${error.code}: ${error.localizedDescription}`);
            } else {
                callback('Connected');
            }
        });
    }

    getSSID() {
        return IOTWifi.fetchSSIDInfo();
    }
}
