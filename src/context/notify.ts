import React from "react";

export type NotifyContextType = {
  notification: NotificationType[];
  AddNotification: (newNotification: Omit<NotificationType, "id">) => void;
  DeleteNotification: (id: number) => void;
};

export type NotificationType = {
  id: number;
  message: string;
};

const notifyContext = React.createContext<NotifyContextType | undefined>(
  undefined
);

export default notifyContext;
