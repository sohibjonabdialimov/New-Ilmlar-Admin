import { useNavigate } from "react-router-dom";
import teacher_profile from "../../assets/images/tch.png";
import CourseCard from "../../components/course-card/CourseCard";
const navData = [
  {
    id: 1,
    name: "Kurs nomi 1",
  },
  {
    id: 2,
    name: "Kurs nomi 2",
  },
  {
    id: 3,
    name: "Kurs nomi 3",
  },
  {
    id: 4,
    name: "Kurs nomi 4",
  },
  {
    id: 5,
    name: "Kurs nomi 5",
  },
  {
    id: 6,
    name: "Kurs nomi 6",
  },
  {
    id: 7,
    name: "Kurs nomi 6",
  },
  {
    id: 8,
    name: "Kurs nomi 6",
  },
  {
    id: 9,
    name: "Kurs nomi 6",
  },
];
const TeacherProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="py-7">
      <div className="pb-5">
        <button onClick={() => navigate("/")} className="btn p-[5px_20px]">
          Orqaga
        </button>
      </div>
      <div className="sm:mb-16 mb-10">
        <div className="flex sm:gap-5 gap-3">
          <img
            className="w-[300px] rounded-[15px]"
            src={teacher_profile}
            alt=""
          />
          <div className="flex flex-col sm:gap-2 gap-1">
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Ism: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Familiya: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Mutaxassislik: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Ustoz haqida matn: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Email: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Username: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Hisob raqam: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Hisob balansi: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Havola: <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Ro’yxatdan o’tgan vaqti:{" "}
              <span className="font-normal">Abdialimov</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Holati: <span className="font-normal">Abdialimov</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-14 sm:mb-5 mb-10">
        <h1 className="title mb-8">Kurslar ( 12 ta )</h1>
        <div className="grid sm:grid-cols-4 grid-cols-1 justify-between w-full gap-5 gap-y-7">
          {navData.map((item) => {
            return <CourseCard role={"teacher"} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
