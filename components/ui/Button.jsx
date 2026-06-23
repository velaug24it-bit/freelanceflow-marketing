"use client"

import Link from 'next/link'
export default function Button({ href, children, variant = 'primary', className = '', external = false, ...props }) {
	const base = 'btn'
	const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost'
	const classes = [base, variantClass, className].filter(Boolean).join(' ')

	if (href) {
		if (external) {
			return (
				<a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
					{children}
				</a>
			)
		}

		return (
			<Link href={href} className={classes} {...props}>
				{children}
			</Link>
		)
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	)
}
