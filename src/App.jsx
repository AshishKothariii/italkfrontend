import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import { BASE_URL } from "./helper";
function App() {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
