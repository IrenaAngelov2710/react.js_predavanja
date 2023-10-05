import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Comment } from "./components/Comment";

import { UserNavigation } from "./components/UsersNavitagion";
import { Users } from "./components/Users";
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      {/* <h1>I am learning API's</h1> */}
      {/* <Navigation /> */}
  
      {/* Users domasna  */}
      <UserNavigation />

      <Routes>
        {/* <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/single-comment/:id" element={<Comment />} /> */}

        {/* Users domasna  */}
        <Route path="/users" element={<Users />} />
        <Route path="/single-user/:id" element={<User />} />

      </Routes>
    </div>
  );
}

export default App;

