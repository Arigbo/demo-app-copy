// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutPage from './components/projects/AboutPage';
// import './grid.scss';
// import NavComp from './components/nav';
// import ButtonComp from './components2/button';
//  import HeaderComp from './components/HeaderComp';
// import { Navs } from './components2/non-default';
// import { Naved } from './components2/non-default';
// import { Navie } from './components2/non-default';
// import BodyComp from './components/BodComp';
// import FooterComp from './components/footerComp';
// // import ParentComp from './components/ParentComp';
 import ErrorPage from './components/pages/error';
// import NavBar from './components/HeaderComp';
// // import NavCom from './components/navcomp'; 
// import FetchBox from './components/FetchBox';
// import Logo from './components/pages/logo';
// import Home from './components/pages/home';
// import Contacts from './components/pages/contact';
// import Services from './components/pages/services';
// import Login from './components/pages/login';
// import Welcome from './components/pages/welcome';
// import ShareLayout from './components/pages/ShareLayout';
// import Product from './components/pages/product';
// import SignUp from './components/pages/signup';
import Blog from './components/pages/Form/blog';
import UpdateForm from './components/pages/Form/Updateform';
import FirstForm from './components/pages/Form/firstform';
import Singleblog from './components/pages/Form/singleblog';
// import GridComp from './components/gridComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes>
            {/* <Route path='/' element={<ShareLayout />} />
            <Route index element={<Home />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/services' element={<Services />} />
            <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
            
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/logo' element={<Logo />} />
            <Route path='/{item.id}' element={<Product />} />
            <Route path='/signup' element={<SignUp />} /> */}
            <Route path='/blogs' element={<Blog />} />
            <Route path='/*' element={<ErrorPage />} />
            <Route path='blogs/:blogId' element={<Singleblog />} />
            <Route path='/new' element={<FirstForm />} />
            <Route path='/edit' element={<UpdateForm />} />
            <Route path='/aboutpage' element={<AboutPage/>}/>
          </Routes>
          
               {/* <NavBar text="Login" /> */}
        {/* <GridComp/> */}
          {/* <FetchBox /> */}
          {/* <UpdateForm />
      <FirstForm />
          <Blog />  */}
        </div>
      </header>
    </div>

  );
}


export default App;
