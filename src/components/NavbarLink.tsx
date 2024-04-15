import Link from 'next/link'
import React from 'react'

const NavbarLink = ({ link }) => {
  return (
    <Link href={link.url}>{link.title}</Link>
  )
}

export default NavbarLink