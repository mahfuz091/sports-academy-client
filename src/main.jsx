import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import Authprovider from "./Providers/Authprovider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='wrapper'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>

    </Authprovider>
  </React.StrictMode>
);
