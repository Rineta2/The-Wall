import React from 'react'

import { BiCopyright } from 'react-icons/bi'
import { GiLoveHowl } from 'react-icons/gi'

import "../sass/layout.scss";

export default function Footer() {
  return (
    <footer>
      <p><BiCopyright className='icons' /> Copyright  2024 <a href="#">rineta</a> <GiLoveHowl /> </p>
    </footer>
  )
}
