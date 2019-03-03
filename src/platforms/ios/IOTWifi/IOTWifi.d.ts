
declare class IOTWifi extends NSObject {

	static alloc(): IOTWifi; // inherited from NSObject

	static isAvaliable(): boolean;

	static fetchSSIDInfo(): NSDictionary;

	static new(): IOTWifi; // inherited from NSObject
}

declare var IOTWifiVersionNumber: number;

declare var IOTWifiVersionString: interop.Reference<number>;