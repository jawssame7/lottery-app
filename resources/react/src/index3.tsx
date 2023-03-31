import React from 'react';
import {createRoot} from "react-dom/client";
import App3 from './App3';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    // <React.StrictMode>
    <div className="text-red">
        {/*Hello World*/}
        <App3/>
    </div>
    // </React.StrictMode>
);
