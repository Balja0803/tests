import Profile from "./components/Profile";
import WelcomePage from "./components/WelcomePage";
import "./App.css";
import { useState } from "react";
import data from "../src/components/util/data.js";
import Header from "./components/Header";
function App() {
  console.log(data);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const user = users.map((user, index) => user.userName);
  // const pass = users.map((user, index) => user.password);
  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("username :", userName);
    console.log("password: ", password);
    data.map((user) => {
      if (userName === user.userName && password === user.password) {
        setIsLoggedIn(true);
      } else {
        console.error("Wrong password or username!");
      }
    });
  }
  function getMeOuttaHere() {
    return setIsLoggedIn(false);
  }
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {isLoggedIn ? (
            <Profile setLogout={getMeOuttaHere} />
          ) : (
            <WelcomePage setLogin={loginHandler} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
