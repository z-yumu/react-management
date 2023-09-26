

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
  
  } from '@ant-design/icons'
  import { MenuInfo } from 'rc-menu/lib/interface'
  import { Menu } from 'antd'
  import type { MenuProps } from 'antd'
  import { useNavigate } from 'react-router-dom'

// 在 TypeScript 中，Required<T> 是一个内置的工具类型（Utility Type），用于将给定类型 T 中的所有可选属性变为必选属性，并生成一个新的类型
type MenuItem = Required<MenuProps>['items'][number]

// as 是用于类型断言（Type Assertion）的关键字。它允许开发者手动指定一个值的类型，即将一个类型视为另一个类型。
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
    getItem('Option 1', '/login', <PieChartOutlined />),
    getItem('Option 2', '/home/personal', <DesktopOutlined />),
    getItem('Files', '9', <FileOutlined />)
  ]

  const HomeMenu: React.FC = () => {
    const navigateTo = useNavigate()
    const menuClick = (e: MenuInfo)=>{
        navigateTo(e.key)
      }
      return (
        <Menu theme="dark" defaultSelectedKeys={['/home/personal']} mode="inline" items={items} onClick={menuClick} />
      )
  }

  export default HomeMenu