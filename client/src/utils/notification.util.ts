function showNotification(message: string) {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (isPermissionGranted()) {
    generateNotification(message);
  } else if (Notification.permission !== "denied") {
    requestPermission().then((permission) => {
      if (permission === "granted") {
        generateNotification(message);
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}

function isPermissionDefault() {
  return Notification.permission === "default";
}

function isPermissionGranted() {
  return Notification.permission === "granted";
}

function isPermissionDenied() {
  return Notification.permission === "denied";
}

function requestPermission() {
  return Notification.requestPermission();
}

function generateNotification(message: string) {
  const notificationOptions: NotificationOptions = {
    body: message,
    icon: process.env.PUBLIC_URL + "/logo256.png",
  };
  return new Notification("UnoPomo", notificationOptions);
}

type NotificationSetting = {
  allowed: boolean;
};

export {
  isPermissionGranted,
  isPermissionDenied,
  isPermissionDefault,
  requestPermission,
  showNotification,
};

export type { NotificationSetting };
