import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout.jsx";
import {useAuth} from "./context/AuthContext.jsx";

function App() {
  const {user, role, logout, loading} = useAuth();
  console.log(user);
  return (

    <Layout user={user} />
  );
}

export default App
