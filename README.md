ninja-presence-usb
===============

This is a presence driver for the NinjaBlocks client that tells you when USB devices are plugged in.

By default there is a 1min timeout but this will be configurable through the NinjaBlocks dashboard later.

## Installation
(taken from https://raw.github.com/nonolith/node-usb)

Libusb is required. Older versions of libusb segfault when using bulk or interrupt endpoints.
Use [libusb](http://libusb.org) or [libusbx](http://libusbx.org) 1.0.9 or greater.

**Ubuntu/Debian:** `sudo apt-get install build-essential pkg-config libusb-1.0-0-dev`
**Fedora:** `sudo yum install libusbx-devel`

**OSX:** `brew install libusb pkg-config`

**Windows:** Download a Windows Binary package from http://libusbx.org/ and extract it at `C:\Program Files\libusb`. Use [Zadig](http://sourceforge.net/projects/libwdi/files/zadig/) to install the WinUSB driver for your USB device. Otherwise you will get a `LIBUSB_ERROR_NOT_SUPPORTED` when attempting to open devices.

Then, just run

    npm install usb

to install from npm. See the bottom of this page for instructions for building from a git checkout.


## License

Copyright (C) 2013 Ninja Blocks Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
