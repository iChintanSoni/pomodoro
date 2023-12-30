const userAgent = navigator.userAgent;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isDesktop = /Windows|Macintosh|Linux/i.test(navigator.userAgent);

const isAndroid = /Android/i.test(navigator.userAgent);
const isiPhone = /Android/i.test(navigator.userAgent);

function isChrome() {
  return userAgent.indexOf("safari") != -1 && userAgent.indexOf("chrome") > -1;
}

function isSafari() {
  return userAgent.indexOf("safari") != -1 && userAgent.indexOf("chrome") == -1;
}
