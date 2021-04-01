import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <div className={classes.mainContainer}>
          <Sidebar />
          <div className={classes.container}>
              container
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
