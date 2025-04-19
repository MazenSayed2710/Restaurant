import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Homepage from "./Pages/home/Homepage";
import MenuPage from "./Pages/menu/MenuPage";
import CartPage from "./Pages/cart/CartPage";
import LoginPage from "./Pages/login/LoginPage";
import MenuItemContentPage from "./Pages/menu content/MenuItemContentPage";
import ItemDetailsPage from "./Pages/Item details/ItemDetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectRouts from "./Components/ProtectRouts";
import SignupPage from "./Pages/Signup/SignupPage";
import NotFoundPage from "./Components/NotFoundPage";
import OrderSummary from "./Pages/cart/OrderSummary";
import Checkout from "./Pages/checkout/Checkout";
import CompletionCheckout from "./Pages/checkout/CompletionCheckout";
const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClint}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectRouts>
              <AppLayout />
              // </ProtectRouts>
            }
          >
            <Route index element={<Homepage />} />
            <Route path="menu">
              <Route index element={<MenuPage />} />
              <Route path=":type" element={<MenuItemContentPage />} />
              <Route path=":type/:id" element={<ItemDetailsPage />} />
            </Route>
            <Route path="cart" element={<CartPage />} />
            <Route path="orderSummary" element={<OrderSummary />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="completion" element={<CompletionCheckout />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
