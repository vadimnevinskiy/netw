import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <div className={classes.mainContainer}>
          <Sidebar />
          <div className={classes.container}>
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/users' render={() => <Users />} />
              <Route path='/dialogs' render={() => <Dialogs />} />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
