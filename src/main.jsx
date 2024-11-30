import App from "./App";
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider,} from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import Dashboard from "./page/dashbaord/Dashboard";
import Team from "./page/team/Team";
import Invoices from "./page/invoices/Invoices";
import Contacts from "./page/contacts/Contacts";
import Form from "./page/form/Form";
import FAQ from "./page/faq/FAQ";
import Calendar from "./page/calendar/Calendar";
import Bar from "./page/bar/Barchart";
import Pie from "./page/pie/Pie";
import Line from "./page/line/Linechart";
import Geography from "./page/geography/Geography";
import NotFound from "./page/notfound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<Dashboard />}/>
    <Route path="/team" element={<Team />}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/invoices" element={<Invoices />}/>
    <Route path="/form" element={<Form />}/>
    <Route path="/calender" element={<Calendar />}/>
    <Route path="/faq" element={<FAQ />}/>
    <Route path="/bar" element={<Bar />}/>
    <Route path="/pie" element={<Pie />}/>
    <Route path="/line" element={<Line />}/>
    <Route path="/geography" element={<Geography />}/>

    <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);



// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);