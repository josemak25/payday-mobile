describe('TEST DEVICE UTIL METHOD', () => {
  test('test when util method is called it returns user phone width and height values', () => {
    const device = require('../../src/utils/device');

    expect(device).not.toBeNull();
    expect(device.DEVICE_OS).toBeTruthy();
    expect(device.DEVICE_FULL_HEIGHT).toBeTruthy();
    expect(device.DEVICE_FULL_WIDTH).toBeTruthy();
  });
});
