import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

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

  const getActiveClassName = (): string => {
    const activeClassName: string = 'StyledMainMenuDesktopItem_active'
    if (router.asPath === props.href) {
      return activeClassName
    }

    switch (router.asPath) {
      case props.href:
      case `/${props.href}`:
        return activeClassName
      default:
        return ''
    }
  }

  return (
    <a
      // @ts-ignore
      href={props.href}
      onClick={handleClick}
      className={getActiveClassName()}
    >
      {props.children}
    </a>
  )
}

export { ActiveLink }
