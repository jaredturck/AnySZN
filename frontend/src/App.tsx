import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { fetchJson } from './components/api_fetch';
import './App.scss';

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './components/views/homepage';
import { NotFound } from './components/views/404';

import { AboutUs } from './components/views/about_us';
import { GiftCards } from './components/views/gift_cards';
import { SupportCentre } from './components/views/support_centre';
import { Shipping } from './components/views/shipping';
import { Refunds } from './components/views/refunds';
import { TrackMyOrder } from './components/views/track_orders';
import { PaymentMethods } from './components/views/payment_methods';
import { ExclusiveOffers } from './components/views/exclusive_offers';
import { FasterCheckout } from './components/views/checkout';
import { VRWardrobe } from './components/views/vr_waredrobe';
import { AIStylist } from './components/views/ai_stylist';
import { VRChangingRoom } from './components/views/vr_changing_room';
import { EngageWithFollowers } from './components/views/engage_with_followers';
import { TermsAndConditions } from './components/views/terms_and_conditions';
import { PrivacyPolicy } from './components/views/privacy_policy';
import { CookiePolicy } from './components/views/cookie_policy';
import { MensClothing, WomensClothing } from './components/views/clothing';
import { CreateWardrobe } from './components/views/create_waredrobe';
import { MyAccount } from './components/views/my_account';

import { Login, Register, ForgotPassword, ChangePassword, ResetEmail } from './components/views/auth';
import { ContactUs } from './components/views/contact_us';
import ProductPage from './components/views/ProductPage';
import SearchPage from './components/views/SearchPage';

type AuthStatusResponse = {
  isAuthenticated: boolean;
  user: {
    id: number;
    username: string;
    email: string;
  } | null;
};

function Layout(props: { auth: AuthStatusResponse | null }) {
  return (
    <div>
      <Navbar auth={props.auth} />
      <main className="main-app">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [auth, setAuth] = useState<AuthStatusResponse | null>(null);

  useEffect(() => {
    fetchJson("/api/csrf/").catch((error) => {
      console.error("Failed to set CSRF cookie", error);
    });

    fetchJson<AuthStatusResponse>("/api/auth/status/")
      .then((data) => {
        setAuth(data);
      })
      .catch((error) => {
        console.error("Failed to fetch auth status", error);
        setAuth({ isAuthenticated: false, user: null });
      });
  }, []);

  return (
    <Routes>
      <Route element={<Layout auth={auth} />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="gift-card" element={<GiftCards />} />
        <Route path="support-centre" element={<SupportCentre />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="refunds" element={<Refunds />} />
        <Route path="track-orders" element={<TrackMyOrder />} />
        <Route path="payment-methods" element={<PaymentMethods />} />
        <Route path="exclusive-offers" element={<ExclusiveOffers />} />
        <Route path="checkout" element={<FasterCheckout />} />
        <Route path="vr-wardrobe" element={<VRWardrobe />} />
        <Route path="ai-stylist" element={<AIStylist />} />
        <Route path="vr-changing-room" element={<VRChangingRoom />} />
        <Route path="engage-with-followers" element={<EngageWithFollowers />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="mens-clothing" element={<MensClothing />} />
        <Route path="womens-clothing" element={<WomensClothing />} />
        <Route path="create" element={<CreateWardrobe />} />
        <Route path="login" element={<Login setAuth={setAuth} auth={auth} />} />
        <Route path="register" element={<Register setAuth={setAuth} auth={auth} />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="reset-email" element={<ResetEmail />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="account" element={ <MyAccount setAuth={setAuth} auth={auth} />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="search" element={ <SearchPage /> } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
