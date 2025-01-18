import axiosT from "./axios";


export const PostUsersLogin = (data) => {
  return axiosT.post("/api/users/login", data);
};
export const GetUsersUserme = (token) => {
  return axiosT.get("/api/users/userme", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const GetAdminCourses = (token) => {
  return axiosT.get("/api/admins/courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const GetAdminTeachers = (token) => {
  return axiosT.get("/api/admins/teachers", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const ConfirmCourse = (id, token) => {
  return axiosT.get(`/api/admins/courses/confrm/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const ConfirmTeacher = (id, token) => {
  return axiosT.get(`/api/admins/teacher/confrm/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const GetTeacherAccount = (id) => {
  return axiosT.get(`/api/users/teacheraccout/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};