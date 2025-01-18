import { useLocation, useNavigate } from "react-router-dom";

import { Button, Layout, Menu, theme } from "antd";
import {
  CodeSandboxOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Header, Sider, Content } = Layout;
const layoutSidebar = [
  {
    key: "",
    icon: <HomeOutlined />,
    label: "O'qituvchilar",
  },
  {
    key: "courses",
    icon: <CodeSandboxOutlined />,
    label: "Kurslar",
  },

  {
    key: "finance",
    icon: <ShoppingOutlined />,
    label: "Moliya",
  }
];
const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const localtion = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sticky top-1">
          <h1
            style={{
              color: "#fff",
              fontSize: "20px",
              textAlign: "center",
            }}
            className="my-5"
          >
            Ilmlar
          </h1>

          <Menu
            theme="dark"
            mode="inline"
            style={{
              height: "80vh",
            }}
            defaultSelectedKeys={[localtion.pathname.slice(1)]}
            onSelect={(value) => {
              navigate(`/${value.key}`);
            }}
            items={layoutSidebar}
          />
          <button
            className="bg-blue_color rounded-xl w-full text-white px-4 py-2 border-none cursor-pointer hover:opacity-85 transition-opacity"
            onClick={() => {
              localStorage.removeItem("access_token");
              navigate("/login");
            }}
          >
            Chiqish
          </button>
        </div>
      </Sider>

      <Layout className="bg-bg_color">
        <div className="flex bg-white justify-between">
          <Header
            style={{
              padding: 0,
              background: "transparent",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
          </Header>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <UserOutlined style={{ fontSize: "22px" }} />
              <p className="font-semibold">
                {JSON.parse(localStorage.getItem("user_data"))?.full_name}
              </p>
            </div>
          </div>
        </div>

        <Content
          style={{
            margin: "0px 16px",
            padding: 24,
            background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
