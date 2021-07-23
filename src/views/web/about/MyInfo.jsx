import React from 'react'

// components
import { Divider, Rate, Icon, Avatar } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'
import { QqOutlined } from '@ant-design/icons'

const skills = [
  {
    label: '熟悉常用的算法与数据结构',
    rate: 3
  }
]

const MyInfo = () => {
  return (
    <>

      <Divider orientation='center'>关于我</Divider>

      <ul className='about-list'>
        <li>姓名：董冠希</li>
        <li>本科： 杭州电子科技大学（HDU）CS</li>
        <li>硕士： 电子科技大学（UESTC）CS（在读）</li>
        <li>
          联系方式：
          <QqOutlined /> 1181571719
          <Divider type='vertical' />
          <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
          <a href='mailto:cuferpan@gmail.com'>cuferpan@gmail.com</a>
        </li>
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
        <li>
          其他
          <ul>
            <li>常用开发工具： vscode、vim、webstorm、git</li>
            <li>熟悉的 UI 框架： antd、element-ui</li>
            <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
