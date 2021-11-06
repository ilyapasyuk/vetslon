import { useRouter } from 'next/router'
import React from 'react'
import { LinkProps } from 'next/link'

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  children: React.ReactNode
}

const ActiveLink = ({ activeClassName, ...props }: ActiveLinkProps) => {
  const router = useRouter()

  // @ts-ignore
  const handleClick = e => {
    e.preventDefault()
    // @ts-ignore
    router.push(props.href)
  }

  return (
    <a
      // @ts-ignore
      href={props.href}
      onClick={handleClick}
      className={router.asPath === `/${props.href}` ? 'StyledMainMenuDesktopItem_active' : ''}
    >
      {props.children}
    </a>
  )
}

export { ActiveLink }
