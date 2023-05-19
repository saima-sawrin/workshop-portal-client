
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { BrowserRouter ,Routes, Route, RouterProvider} from "react-router-dom";

import theme from './theme';

import Layout from './Layout/Layout';
import Events from './component/Events';
import Details from './component/Details';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import  {Provider} from 'react-redux';
import store from './redux/reducer/store';

function App() {

  return (
    <div className="app">
<Provider store={store}>
<BrowserRouter >
      <ThemeProvider theme={theme}>
        <CssBaseline>
         <Routes>
          <Route element={<Layout></Layout>}>
            <Route path='/' element={<Events></Events>}></Route>
            <Route path='/details/:id'   loader={({params})=>fetch(`https://learning-platform-server-saima-sawrin.vercel.app/details/${params.id}`)} element={<Details></Details>} ></Route>
            <Route path='/signIn' element={<SignIn></SignIn>} ></Route>
            <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
          </Route>
         </Routes>
       
        </CssBaseline>
      </ThemeProvider>
      </BrowserRouter>
</Provider>




    </div>
  );
}

export default App;
