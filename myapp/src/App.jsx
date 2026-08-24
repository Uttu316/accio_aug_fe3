import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import UsersList from "./components/userList";

function App() {
  return (
    <div className="app">
      <Header />
      <UsersList />
      <Footer />
    </div>
  );
}
export default App;
