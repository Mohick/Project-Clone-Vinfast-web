import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../Main Page/Main Page Views.jsx"));
const PageLogin = lazy(() => import("../Login/Login.jsx"));
const Support = lazy(() => import("../Support/Support.jsx"));

function RouterPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={''}>
            <MainPage />
            <Support/>
          </Suspense>
        }
      />
      <Route path="/login" element={ <Suspense fallback={''}>
            <PageLogin />
          </Suspense>} />
    </Routes>
  );
}

export default RouterPage;
