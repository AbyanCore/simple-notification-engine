# Simple Notification Engine 🔔

A lightweight notification system built with modern web technologies to manage and display notifications efficiently. Built entirely using React Hooks for state management and functionality, without external state management libraries.

## ⚡ Features

- Real-time notification updates using `useState` and `useContext`
- Highly customizable with custom React components
- Easy integration with various React projects
- Zero external dependencies for core functionality
- Queue management system using `useState`

## 🛠️ Technology Stack

- **Frontend:**
  - React 18 (Hooks only)
  - TypeScript
  - Vite (for fast development)
- **Backend:**
  - None

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/abyancore/simple-notification-engine.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 💻 Usage Example

```typescript
import { useNotification } from "./hooks/useNotification";

function App() {
  const notify = useNotify();

  const handleClick = () => {
    notify.addNotification({
      message: "Hello Notify",
    });
  };

  return <button onClick={handleClick}>Show Notification</button>;
}
```

## ⚙️ How It Works

The notification system is built entirely with React Hooks:

- `useState` for managing notification queue
- `useContext` for providing notification context
- `useCallback` for memoized notification handlers
- Custom hooks for encapsulating notification logic
