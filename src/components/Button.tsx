import React from 'react'
import { PrismicNextLink } from '@prismicio/next'
import { LinkField } from '@prismicio/client'
import clsx from 'clsx'

type Props = {
    buttonLink: LinkField
    buttonText: string | null
    className?: string
}

export function Button({buttonLink, buttonText, className}: Props) {
  return (
    <PrismicNextLink field={buttonLink} className={clsx("rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-100 hover:bg-orange-700 md:text-2xl", className)}>
    {buttonText}
    </PrismicNextLink>  
)
}