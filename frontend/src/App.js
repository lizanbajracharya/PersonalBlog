import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import LoginScreen from "./screens/LoginScreen";
import { ToastContainer } from "react-toastify";
import Register from "./screens/Register";
import HomeScreen from "./screens/HomeScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import BlogCreateScreen from "./screens/BlogCreateScreen";
import MyBlogsScreen from "./screens/MyBlogsScreen";
import BlogEditScreen from "./screens/BlogEditScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
        draggable
        pauseOnHover
      />
      <Router>
        {/* <Header /> */}
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/blogs/:id" component={BlogDetailScreen} />
        <Route exact path="/blogs/edit/:id" component={BlogEditScreen} />
        <Route exact path="/create" component={BlogCreateScreen} />
        <Route exact path="/myblogs" component={MyBlogsScreen} />
        <Route exact path="/profile" component={UpdateProfileScreen} />
      </Router>
    </>
  );
}

export default App;
