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
          <Route path="/display" exact component={() => <EmployeeForm />} />
          <Route path="/edit/:id" exact component={() => <EditEmployee />} />
          <Route path="/search" exact component={() => <SearchEmployee />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
