import { Table } from "antd";
import "./home.css";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Image",
    dataIndex: "image",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    image: (
      <img
        className="rounded-full"
        width={50}
        height={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmvN88BtG0-m56QzFx25PAIV-bkNGwNCyWT0uqFEBVjzIZXwlI7pqx_xjPkDxgtmk6ceeXA&s"
      />
    ),
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    image: (
      <img
        width={50}
        height={50}
        className="rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmvN88BtG0-m56QzFx25PAIV-bkNGwNCyWT0uqFEBVjzIZXwlI7pqx_xjPkDxgtmk6ceeXA&s"
      />
    ),
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    image: (
      <img
        className="rounded-full"
        width={50}
        height={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmvN88BtG0-m56QzFx25PAIV-bkNGwNCyWT0uqFEBVjzIZXwlI7pqx_xjPkDxgtmk6ceeXA&s"
      />
    ),
  },
];
const HomePage = () => {
  const navigate = useNavigate();

  return <Table columns={columns} dataSource={data} size="middle" />;
};

export default HomePage;
