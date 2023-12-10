import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  AbsencesPage,
  DashboardPage,
  GradesPage,
  LessonPage,
  LoginPage,
  SchedulePage,
  StudentPage,
  PageNotFound,
} from "./pages/index";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="/dashboard">
              <Route index element={<DashboardPage />} />
              <Route path=":lessonId" element={<LessonPage />} />
              <Route path=":lessonId/:studentId" element={<StudentPage />} />
            </Route>
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/absences" element={<AbsencesPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
