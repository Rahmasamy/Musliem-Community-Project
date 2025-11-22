import { useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NoConnection from "./layouts/lose-internet-connection/NoConnection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SocketProvider } from "./context/socketContext";
import { VisitProvider } from "./context/dashboard-context";

const queryClient = new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <VisitProvider>
          {/* <NoConnection /> */}
          <AppRoutes />
        </VisitProvider>
      </SocketProvider>
    </QueryClientProvider>
  );
}

export default App;
