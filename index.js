var Presence = require('ninja-presence-base');

module.exports = Presence;

Presence.prototype.G = 'usb';
Presence.prototype.name = 'Presence - USB';

Presence.prototype.init = function() {
  this._usb = require('usb');
  this._opts.scanDelay  = 2000;
};

Presence.prototype.scan = function() {
  var self = this;
  self._usb.getDeviceList().forEach(function(device) {
    console.log(device.deviceDescriptor);
    self.see({
      id: device.deviceDescriptor.idVendor.toString(16) + ':' + device.deviceDescriptor.idProduct.toString(16)
    });
  });
  this.scanComplete();
  //console.log();
};
