import React, { Fragment } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar Section/Sidebar";
import Body from "./Components/Body Section/Body";
import useRoutes from "./routes";

const App = () => {
  // Routes
  const Router = useRoutes();

  return (
    // <div className='container'>
    //     <Sidebar/>
    //     <Body/>
    // </div>

    <Fragment>{Router}</Fragment>
  );
};

export default App;
