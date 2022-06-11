import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { DefaultLayout } from '../layouts/default'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
	return (
		getLayout(<Component {...pageProps} />)
	)
}

export default MyApp
