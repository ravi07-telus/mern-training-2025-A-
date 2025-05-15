import { Routes,Route } from "react-router-dom"
import Todo from "./todo"
import About from "./About"
import Home from "./Home"
import CompletedTasks from "./CompletedTasks"
const AppRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/dashboard" element={<Todo></Todo>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="completed-tasks" element={<CompletedTasks ></CompletedTasks>}></Route>
        </Routes>
    )
}

export default AppRouter