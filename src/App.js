import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";
import { EditEmployee } from "./components/EditEmployee";
import { SearchEmployee } from "./components/SearchEmployee";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/display" component={() => <EmployeeForm />} />
          <Route path="/edit/:id" component={() => <EditEmployee />} />
          <Route path="/search" component={() => <SearchEmployee />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
