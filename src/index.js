import React from "react";
import "bulma/css/bulma.css";
import './index.css'
import { createRoot } from "react-dom/client";
import App from './App';
import { NavigationProvider } from './context/navigation';
import { Provider } from 'react-redux';
import { store } from './store';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>    
    </Provider>
);


// const secondrootElement = document.getElementById("secondroot");
// const secondroot = createRoot(secondrootElement);


// secondroot.render(
//     <Provider store={store}>
//         <MoviePage/>
//     </Provider>    
// );