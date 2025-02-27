import { Button, message, Popconfirm } from "antd";
import avatar from "../../assets/images/avatar.png";
import star from "../../assets/images/star.svg";
import { ConfirmCourse } from "../../services/api";
const CourseCard = ({ item, getCourses }) => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
    {contextHolder}
      <div className="cursor-pointer">
        <img
          className="w-full object-cover rounded-2xl h-[220px]"
          src={item?.obloshka}
          alt="Yangi qo’shilgan kurslar"
        />
        <div className="flex items-center justify-between mt-3 mb-2">
          <div className="flex items-center gap-1">
            <img
              className="w-[13px] h-[12.4px] object-cover"
              src={star}
              alt="Ilmlar yulduz"
            />
            <p className="font-normal text-[11px] leading-5 text-secondary_color">
              5.0 (30 sharhlar)
            </p>
          </div>
          <p className="font-normal text-[11px] leading-5 text-secondary_color">
            {item?.sold_count} o’quvchi
          </p>
        </div>
        <h1 className="text-lg font-semibold text-main_color mb-2">
          {item?.course_name}
        </h1>
        <div className="flex items-center gap-1 mb-2">
          <img
            className="w-6 h-6 object-cover rounded-full"
            src={avatar}
            alt="Avatar ilmlar"
          />
          <p className="text-secondary_color text-sm font-normal">
            {item?.teacher_first_name} {item?.teacher_last_name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-blue_color text-base font-semibold">
            {item?.price}
          </p>
        </div>
        <div className="flex gap-3 my-2">
          <Popconfirm
            title="Tasdiqlash"
            description="Kursni tasdiqlamoqchimisiz?"
            onConfirm={() => {
              ConfirmCourse(item?.course_id, localStorage.getItem("token"))
                .then((res) => {
                  console.log(res);

                  getCourses();
                  messageApi.open({
                    type: "success",
                    content: "Kurs tasdiqlandi",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            okText="Ha"
            cancelText="Yo'q"
          >
            {
              item?.is_verified ? <Button disabled type="text">Active</Button> : <Button type="primary">Kursni tasdiqlash</Button>
            }
            
          </Popconfirm>
          <Popconfirm
            title="Bloklash"
            description="Kursni bloklamoqchimisiz?"
            onConfirm={() => {
              console.log(item?.course_id);

              // DeleteOneBuyer(item.id).then((res) => {
              //   refetchBuyer();
              //   messageApi.open({
              //     type: "success",
              //     content: "Mahsulot o'chirildi",
              //   });
              // });
            }}
            okText="Ha"
            cancelText="Yo'q"
          >
            <Button type="primary" danger className="text-red-500">
              Bloklash
            </Button>
          </Popconfirm>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
