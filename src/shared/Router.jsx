import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Select from "../pages/Select";
import Dark from "../pages/Dark";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/select" element={<Select />} />
        <Route path="/dark" element={<Dark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
