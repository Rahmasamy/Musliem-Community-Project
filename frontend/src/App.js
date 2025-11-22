import { jsx as _jsx } from "react/jsx-runtime";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SocketProvider } from "./context/socketContext";
import { VisitProvider } from "./context/dashboard-context";
const queryClient = new QueryClient();
function App() {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(SocketProvider, { children: _jsx(VisitProvider, { children: _jsx(AppRoutes, {}) }) }) }));
}
export default App;
