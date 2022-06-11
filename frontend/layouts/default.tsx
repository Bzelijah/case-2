import React, { Fragment } from 'react'
import { Header, Footer } from '../components'

type Props = React.PropsWithChildren & {

}

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
        <Fragment>
           <Header />
           {children}
           <Footer />
        </Fragment>
    )
}
