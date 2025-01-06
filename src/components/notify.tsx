import React, { useCallback } from "react";
import notifyContext, {
  NotificationType,
  NotifyContextType,
} from "../context/notify";
import { useNotify } from "../hooks/notify";

const NotifyProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = React.useState<NotificationType[]>(
    []
  );

  const AddNotification = useCallback(
    (newNotification: Omit<NotificationType, "id">) => {
      const newValue: NotificationType = {
        id: Date.now(),
        message: newNotification.message,
      };

      setNotification((prev) => [...prev, newValue]);
    },
    []
  );

  const DeleteNotification = useCallback((id: number) => {
    setNotification((prev) => prev.filter((val) => val.id != id));
  }, []);

  return (
    <notifyContext.Provider
      value={{
        notification,
        AddNotification,
        DeleteNotification,
      }}
    >
      {children}
    </notifyContext.Provider>
  );
};

const NotifyBar = () => {
  const { notification, AddNotification, DeleteNotification } = useNotify();

  return (
    <div className="fixed top-0 right-0 w-full p-4 z-50 flex flex-col gap-4">
      {notification.map((data) => (
        <div
          key={data.id}
          className="bg-white rounded-lg shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl max-w-sm ml-auto"
        >
          <div className="relative">
            <div className="p-4 pr-12 text-sm font-medium">{data.message}</div>
            <button
              onClick={() => {
                DeleteNotification(data.id);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-500 hover:text-gray-700">✕</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

NotifyProvider.NotifyBar = NotifyBar;

export default NotifyProvider;
