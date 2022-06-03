
//     import React from 'react';
//     // import './App.css';
//     import lightTheme from "../app/theme/light";
//     import darkTheme from "../app/theme/dark";
//     import { ThemeProvider } from "styled-components";
//     import { darkModeAction } from '../app/actions/config_action';
//     import { useEffect } from 'react';
//     import Container from "./Components/Container";





// import { useSelector, useDispatch } from "react-redux";

// function App() {
//   const dispatch = useDispatch();
//   const config = useSelector(state => state.config)

//   useEffect(() => {
//     if (!config.darkMode) {
//       dispatch(darkModeAction(window.localStorage.getItem('theme')))
//     }
//   }, [config.darkMode, dispatch])

//   const themeChange = (value) => {
//     window.localStorage.setItem('theme', value)
//     dispatch(darkModeAction(value))
//   }

//   return (
//     <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
//       <nav style={{ width: '100%', padding: '2rem 0 ', backgroundColor: 'gray', textAlign: 'center' }}>
//         <button onClick={() => themeChange('dark')}>Dark Mode</button>
//         <button onClick={() => themeChange('light')}>Light Mode</button>
//       </nav>

//       <Container >
       
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;


import React from 'react';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './app/reducers/userSlice';
import Logout from './Components/Logout';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
    const user = useSelector(selectUser);
    
    return (
        <div>
            {user ? (<Logout/> && <Content/> ) : <Login/>}
            <Footer />
        </div>
    )
}

export default App