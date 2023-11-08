import React from 'react'
import Avatar from '@/components/Avatar'
import './index.scss'

export default function Header(props) {
  return (
    <div className={`${props.className} header`}>
      <Avatar />
    </div>
  )
}
