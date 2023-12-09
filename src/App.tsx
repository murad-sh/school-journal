import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./index.css";
import {
  Login,
  Dashboard,
  PageNotFound,
  Grades,
  Absences,
  Schedule,
  LessonPage,
  Student,
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
              <Route index element={<Dashboard />} />
              <Route path=":lessonId" element={<LessonPage />} />
              <Route path=":lessonId/:studentId" element={<Student />} />
            </Route>
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/absences" element={<Absences />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
