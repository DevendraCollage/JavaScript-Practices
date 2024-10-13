// Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.

//! This will only works in Browser.

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

console.log(detectDeviceType());
