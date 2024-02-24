import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Text from "../components/Text";
import useNotification from "../hooks/useNotification";
import settingsUrl from "../utils/setting.util";
import "./index.css";
import { NotificationsOff } from "../components/Icons";
import { Notifications as NotificationOn } from "../components/Icons";
import { useAppDispatch, useAppSelector } from "../app.hooks";
import { toggleEnabled } from "./../slices/notification.slice";

function Notifications() {
  const { permission, requestPermission } = useNotification();

  const { enabled } = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const updateNotification = () => {
    dispatch(toggleEnabled());
  };

  return (
    <div className="Notification">
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          lineHeight: 2,
        }}
      >
        <Text variant="h5">Notifications</Text>
        <Text variant="caption">
          For timely alerts
        </Text>
        {permission === "granted" && (
          <IconButton
            icon={enabled ? NotificationsOff : NotificationOn}
            onClick={updateNotification}
          />
        )}
      </div>
      {permission === "default" && (
        <Button onClick={requestPermission}>Allow Notifications</Button>
      )}
      {permission === "denied" && (
        <Text variant="caption">
          Go to{" "}
          <a href={settingsUrl()} target="_blank" rel="noopener noreferrer">
            Settings
          </a>{" "}
          to enable it again.
        </Text>
      )}
    </div>
  );
}

export default Notifications;
