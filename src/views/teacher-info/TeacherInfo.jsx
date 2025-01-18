import { useNavigate, useParams } from "react-router-dom";
import { GetTeacherAccount } from "../../services/api";
import { useQuery } from "react-query";
import pr from "../../assets/images/pr.png"

const TeacherInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: account } = useQuery(["GetTeacherAccount"], () =>
    GetTeacherAccount(id)
  );
  let teacher = account?.data.data;
  console.log(teacher);
  
  return (
    <div className=" bg-bg_color rounded-2xl p-8 py-7">
      <button onClick={() => navigate("/")} className="btn p-[5px_20px]">
        Orqaga
      </button>
      <h1 className="title mt-4 mb-10">Ustoz haqida ma’lumot</h1>
      <div className="flex gap-4">
        <img className="w-[250px]" src={teacher?.profile_img ? teacher?.profile_img : pr} alt="" />
        <div>
          <p>
            Ism: <span>{teacher?.first_name}</span>
          </p>
          <p>
            Familiya: <span>{teacher?.last_name}</span>
          </p>
          <p>
            Mutaxassislik: <span>{teacher?.spiceal ? teacher?.spiceal : "Yo'q"}</span>
          </p>
          <p>
            Ustoz haqida matn: <span>Yo'q</span>
          </p>
          <p>
            Email: <span>{teacher?.email}</span>
          </p>
          <p>
            Username: <span>Yo'q</span>
          </p>
          <p>
            Aloqa uchun kontakt: <span>Yo'q</span>
          </p>
          <p>
            Ro’yxatdan o’tgan vaqti: <span>Yo'q</span>
          </p>
          <p>
            Holati: <span>Yo'q</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
