import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <div className={classes.mainContainer}>
          <SidebarContainer />
          <div className={classes.container}>
              <Route path='/profile' render={() => <ProfileContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/dialogs' render={() => <Dialogs />} />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
