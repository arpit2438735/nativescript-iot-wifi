var IotWifi = require("nativescript-iot-wifi").IotWifi;
var iotWifi = new IotWifi();

describe("greet function", function() {
    it("exists", function() {
        expect(iotWifi.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(iotWifi.greet()).toEqual("Hello, NS");
    });
});