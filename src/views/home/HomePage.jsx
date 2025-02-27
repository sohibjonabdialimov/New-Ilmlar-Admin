import { Button, message, Popconfirm, Select, Table } from "antd";
import "./home.css";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { ConfirmTeacher, GetAdminTeachers } from "../../services/api";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Balance",
    dataIndex: "balance",
  },
  {
    title: "Umumiy Credit",
    dataIndex: "totalCredit",
  },
  {
    title: "Status",
    dataIndex: "status_name",
  },
  {
    title: "Ko'rish",
    dataIndex: "show",
  },
  {
    title: "Tasdiqlash",
    dataIndex: "verify",
  },
];
const { Option } = Select;
const HomePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [original, setOriginal] = useState([]);
  const { refetch } = useQuery(
    ["GetCourses"],
    () => GetAdminTeachers(localStorage.getItem("token")),
    {
      onSuccess: (data) => {
        setData(
          data.data.data.map((item) => {
            return {
              key: item.teacher_id,
              name: item.first_name + " " + item.last_name,
              email: item.email,
              balance: item.balance,
              totalCredit: item.totalCredit,
              status_name: item.status_name,
              show: (
                <button
                  className="border-none bg-transparent cursor-pointer"
                  onClick={() => {
                    navigate(`/teacher-info/${item.teacher_id}`);
                  }}
                >
                  <EyeOutlined />
                </button>
              ),
              verify: (
                <Popconfirm
                  title="Tasdiqlash"
                  description="O'qituvchini tasdiqlamoqchimisiz?"
                  onConfirm={() => {
                    ConfirmTeacher(
                      item?.teacher_id,
                      localStorage.getItem("token")
                    )
                      .then((res) => {
                        console.log(res);
                        refetch();
                        messageApi.open({
                          type: "success",
                          content: "O'qituvchi tasdiqlandi",
                        });
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  okText="Ha"
                  cancelText="Yo'q"
                >
                  {item?.status_name === "active" ? (
                    <Button disabled type="text">
                      Active
                    </Button>
                  ) : (
                    <Button type="primary">Tasdiqlash</Button>
                  )}
                </Popconfirm>
              ),
            };
          })
        );
        setOriginal(
          data.data.data.map((item) => {
            return {
              key: item.teacher_id,
              name: item.first_name + " " + item.last_name,
              email: item.email,
              balance: item.balance,
              totalCredit: item.totalCredit,
              status_name: item.status_name,
              show: (
                <button
                  className="border-none bg-transparent cursor-pointer"
                  onClick={() => {
                    navigate("/teacher-info");
                  }}
                >
                  <EyeOutlined />
                </button>
              ),
              verify: (
                <Popconfirm
                  title="Tasdiqlash"
                  description="O'qituvchini tasdiqlamoqchimisiz?"
                  onConfirm={() => {
                    ConfirmTeacher(
                      item?.teacher_id,
                      localStorage.getItem("token")
                    )
                      .then((res) => {
                        console.log(res);
                        refetch();
                        messageApi.open({
                          type: "success",
                          content: "O'qituvchi tasdiqlandi",
                        });
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  okText="Ha"
                  cancelText="Yo'q"
                >
                  {item?.status_name === "active" ? (
                    <Button disabled type="text">
                      Active
                    </Button>
                  ) : (
                    <Button type="primary">Tasdiqlash</Button>
                  )}
                </Popconfirm>
              ),
            };
          })
        );
      },
    }
  );
  console.log(data);

  const handleSelectChange = (value) => {
    if (value !== "all") {
      setData(original.filter((item) => item.status_name === value));
    } else {
      setData(original);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-end mb-5">
        <Select
          placeholder="Qiymatni tanlang"
          onChange={handleSelectChange}
          defaultValue={"all"}
          style={{ width: 200 }}
        >
          <Option value="all">Barchasi</Option>
          <Option value="new">Yangi o'qituvchilar</Option>
          <Option value="active">Tasdiqlangan o'qituvchilar</Option>
        </Select>
      </div>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default HomePage;
