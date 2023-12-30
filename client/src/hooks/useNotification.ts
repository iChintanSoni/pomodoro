import { useEffect, useState } from "react";

const useNotification = () => {
  const [permission, setPermission] = useState<NotificationPermission>();

  useEffect(() => {
    setPermission(Notification.permission);
  }, []);

  function showNotification(message: string) {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (permission === "granted") {
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

  async function requestPermission() {
    const value = await Notification.requestPermission();
    setPermission(value);
    return value;
  }

  function generateNotification(message: string) {
    const notificationOptions: NotificationOptions = {
      body: message,
      icon: process.env.PUBLIC_URL + "/logo256.png",
    };
    return new Notification("UnoPomo", notificationOptions);
  }

  return { permission, requestPermission, showNotification };
};

export default useNotification;
