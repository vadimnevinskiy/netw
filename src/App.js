import classes from './App.module.css';
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div className={classes.appWrapper}>
      <HeaderContainer />
      <div className={classes.mainContainer}>
          <SidebarContainer />
          <div className={classes.container}>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/dialogs' render={() => <Dialogs />} />
              <Route path='/login' render={() => <LoginContainer />} />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
