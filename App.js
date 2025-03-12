import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home_page';
import ClassComponent from './Class-Component';
import FunctionalComponent from "./Functional-Component";

const App = () =>
{
    return
    (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/class-component" element={<ClassComponent />} />
                <Route path="/functional-component" element={<FunctionalComponent />} />
            </Routes>
        </Router>
    );
};

export default App;