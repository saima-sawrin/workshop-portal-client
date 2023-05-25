import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import theme from './theme';


import { Provider } from 'react-redux';
import store from './redux/reducer/store';

import router from './Router/router.js';

function App() {

  return (
    <div className="app">
      <Provider store={store}>
{/* 
        <BrowserRouter >
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Routes>
                <Route element={<Layout></Layout>}>
                  <Route path='/' element={<Events></Events>}></Route>
                  <Route path='/events/:id' loader={({ params }) => fetch(`https://server-eight-delta.vercel.app/events/${params.id}`)} element={<EventDetails></EventDetails>} ></Route>
                  <Route path='/signIn' element={<SignIn></SignIn>} ></Route>
                  <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
                </Route>
              </Routes>

            </CssBaseline>
          </ThemeProvider>
        </BrowserRouter> */}
         <ThemeProvider theme={theme}>
          <CssBaseline>
          <RouterProvider router={router}></RouterProvider>
          </CssBaseline>
      
         </ThemeProvider>
      
      </Provider>

    </div>
  );
}

export default App;
