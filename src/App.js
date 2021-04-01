import classes from './App.module.css';

function App() {
  return (
    <div className={classes.appWrapper}>
      <div className={classes.headerContainer}>
          <div className={classes.header}>
              Header
          </div>
      </div>
      <div className={classes.mainContainer}>
          <div className={classes.sidebar}>
              <nav className={classes.nav}>
                  <a href="#"><span className={classes.navIcon + ' ' + "material-icons"}>person_outline</span>Profile</a>
                  <a href="#" className={classes.active}><span className={classes.navIcon + ' ' + "material-icons"}>people_outline</span>Users</a>
                  <a href="#"><span className={classes.navIcon + ' ' + "material-icons"}>mail</span>dialogs</a>
              </nav>
          </div>
          <div className={classes.container}>
              container
          </div>
      </div>
      <div className={classes.footerContainer}>
          <div className={classes.footer}>
              Footer
          </div>
      </div>
    </div>
  );
}

export default App;
