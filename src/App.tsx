import React from "react";
import { useNotify } from "./hooks/notify";

function App() {
  const [message, setMessage] = React.useState("");
  const notify = useNotify();

  return (
    <>
      <div className="flex flex-row w-screen h-screen bg-slate-950 justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">
            Simple Notification Engine
          </h2>
          <form
            onSubmit={(val) => {
              val.preventDefault();

              notify.AddNotification({
                message: message,
              });

              setMessage("");
            }}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                value={message}
                onChange={(val) => setMessage(val.currentTarget.value)}
                placeholder="Enter your message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-300 enabled:bg-blue-500 enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={!message}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
