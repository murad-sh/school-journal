import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  AbsencesPage,
  DashboardPage,
  GradesPage,
  LessonPage,
  LoginPage,
  SchedulePage,
  StudentGradesPage,
  PageNotFound,
  StudentAbsencesPage,
  Unauthorized,
} from "./pages/index";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import "./index.css";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
            <Route path="/dashboard">
              <Route index element={<DashboardPage />} />
              <Route path=":lessonId">
                <Route index element={<LessonPage />} />
                <Route
                  path=":studentId/grades"
                  element={<StudentGradesPage />}
                />
                <Route
                  path=":studentId/absences"
                  element={<StudentAbsencesPage />}
                />
              </Route>
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/absences" element={<AbsencesPage />} />
          </Route>
          <Route
            element={<ProtectedRoute allowedRoles={["student", "teacher"]} />}
          >
            <Route path="/schedule" element={<SchedulePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
