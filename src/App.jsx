import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views//auth/LoginPage";
import LoginLayout from "./layout/AuthLayout";
import { Suspense, useEffect } from "react";
import { verifyToken } from "./services/verifyToken";
import Loading from "./utils/Loading";
import ExtraLayout from "./layout/ExtraLayout";
import TeacherInfo from "./views/teacher-info/TeacherInfo";

const App = () => {
  const navigate = useNavigate();
  // console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    verifyToken(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />
        <Route
        key={"teacher-info/:id"}
        path={"/teacher-info/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <ExtraLayout>
              <TeacherInfo />
            </ExtraLayout>
          </Suspense>
        }
      />
      {ComponentList()}
    </Routes>
  );
};

export default App;
