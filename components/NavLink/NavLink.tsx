import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LinkComponent from '@mui/material/Link'
import type { PropsWithChildren } from "react";
import type { LinkProps } from "next/link";
import type { LinkProps as MuiLinkProps } from "@mui/material/Link";

export type NavLinkProps = PropsWithChildren<
	LinkProps & { linkProps?: MuiLinkProps }
>;

const NavLinkComponent = ({ children, linkProps, ...props }: NavLinkProps) => {
	const [isActive, setIsActive] = useState(false)
	const { asPath, isReady } = useRouter()

	useEffect(() => {
		if (isReady) {
			const linkPathname = new URL(props?.as as string || props?.href as string, location.href)
				.pathname
			const activePathname = new URL(asPath, location.href).pathname

			if (linkPathname === activePathname) {
				setIsActive(true)
			} else {
				setIsActive(false)
			}
		}
	}, [
		asPath,
		isReady,
		props.as,
		props.href,
	])

	return (
		<Link {...props}>
			<LinkComponent p={2} href="#" underline={isActive ? "always" : "none"} {...linkProps}>
				{children}
			</LinkComponent>
		</Link>
	)
}


export default NavLinkComponent