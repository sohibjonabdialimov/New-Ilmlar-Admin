import { useQuery } from "react-query";
import CourseCard from "../../components/course-card/CourseCard";
import { GetAdminCourses } from "../../services/api";
import { Select } from "antd";
import { useState } from "react";
const { Option } = Select;
const Courses = () => {
  const [original, setOriginal] = useState([]);
  const [data, setData] = useState([]);
  const { refetch: getCourses } = useQuery(
    ["GetCourses"],
    () => GetAdminCourses(localStorage.getItem("token")),
    {
      onSuccess(data) {
        console.log(data.data.data);
        
        setData(data.data.data);
        setOriginal(data.data.data);
      },
    }
  );

  const handleSelectChange = (value) => {
    if (value === "new") {
      setData(original.filter((item) => !item.is_verified));
    }else if(value === "active"){
      setData(original.filter((item) => item.is_verified));
    } else {
      setData(original);
    }
  };
  console.log(data);
  
  return (
    <>
    <div className="flex justify-end mb-5">
      <Select
        placeholder="Qiymatni tanlang"
        onChange={handleSelectChange}
        defaultValue={"all"}
        style={{ width: 200 }}
      >
        <Option value="all">Barchasi</Option>
        <Option value="new">Yangi kurslar</Option>
        <Option value="active">Tasdiqlangan kurslar</Option>
      </Select>
    </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 place-content-between w-full gap-5">
        {data?.map((item) => {
          return (
            <CourseCard
              getCourses={getCourses}
              item={item}
              key={item.course_id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Courses;
