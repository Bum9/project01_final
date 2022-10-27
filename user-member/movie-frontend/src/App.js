import {Route,Routes} from 'react-router-dom';


import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import RegisterUpdatePage from './pages/RegisterUpdatePage';
import './App.css';
import Header from "./components/Header";
import Moviesp from "./components/Moviesp";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


const App =() =>{
  return (
    <Routes>
      {/*<Route path = "/" element={<PostListPage/>}/>*/}
      <Route path = "/login" element={<LoginPage/>}/>
      <Route path = "/register" element={<RegisterPage/>}/>
      <Route path = "/registerupdate" element={<RegisterUpdatePage/>}/>
        <Route element={<Header />} />
        <Route path="/" element={<Moviesp />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/upcoming" element={<Home />} />
        <Route path="/favorite" element={<Home />} />


    </Routes>
  );
}

export default App;
