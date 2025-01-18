import axiosT from "./axios";

export const verifyToken = async (navigate) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) throw new Error("Token mavjud emas");


    await axiosT.get("/api/users/userme", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);

    localStorage.removeItem("token");
    navigate("/login");
  }
};