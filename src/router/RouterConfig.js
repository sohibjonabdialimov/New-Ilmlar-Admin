import React from "react";
import AdminLayout from "../layout/AdminLayout";
import ExtraLayout from "../layout/ExtraLayout";


const HomePage = React.lazy(() => import("../views/home/HomePage"));
const Courses = React.lazy(() => import("../views/courses/Courses"));
const Finance = React.lazy(() => import("../views/finance/Finance"));
const Lesson = React.lazy(() => import("../views/lesson/Lesson"));
const CourseInfo = React.lazy(() => import("../views/course-info/CourseInfo"));
const TeacherProfile = React.lazy(() => import("../views/teacher-profile/TeacherProfile"));

export const RoutesConfig = [{
    title: "home",
    path: "/",
    Layout: AdminLayout,
    roles: [],
    subOptions: [],
    Component: HomePage,
  },
  {
    title: "courses",
    path: "/courses",
    Layout: AdminLayout,
    roles: [],
    subOptions: [],
    Component: Courses,
  },
  {
    title: "finance",
    path: "/finance",
    Layout: AdminLayout,
    roles: [],
    subOptions: [],
    Component: Finance,
  },

  {
    title: "lesson",
    path: "/lesson",
    Layout: ExtraLayout,
    roles: [],
    subOptions: [],
    Component: Lesson,
  },
  {
    title: "course-info",
    path: "/course-info",
    Layout: ExtraLayout,
    roles: [],
    subOptions: [],
    Component: CourseInfo,
  },
  {
    title: "teacher-profile",
    path: "/teacher-profile",
    Layout: ExtraLayout,
    roles: [],
    subOptions: [],
    Component: TeacherProfile,
  },

];