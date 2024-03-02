import { UserProvider } from "./src/context/userContext";
import AppNavigation from "./src/navigations";

export default function App() {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  );
}
