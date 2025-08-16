import { Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Notes from "./Components/Notes";

function main(){
    return (
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/newTextFile" element={<Notes/>}></Route>
        </Routes>
    );
}

export default main;