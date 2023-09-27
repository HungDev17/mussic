import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Login, Public } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import part from "./ultils/part";
function App() {
  return (
    <div>
      <div className="">
        <Routes>
          <Route path={part.PUBLIC} element={<Public />}>
            <Route path={part.HOME} element={<Home />} />
            <Route path={part.LOGIN} element={<Login />} />

            <Route path={part.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
