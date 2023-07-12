import { Center, Text } from '@mantine/core'
import type { NextPage } from 'next'
import PageNotFoundImage from '@/public/404.svg'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Logo from '@/public/Logo.svg'

const PageNotFound: NextPage = () => {
    return (
        <>

            <Head>
                <title>Page not found</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="Page not found" />
                <meta name="description" content="Page not found" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sch.nawafdev.com/404" />
                <meta property="og:title" content="Page not found" />
                <meta property="og:description" content="Page not found" />
                <meta property="og:image" content={"https://raw.githubusercontent.com/nawafalqari/sch/main/logo/sch_t.png"} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sch.nawafdev.com/404" />
                <meta property="twitter:title" content="Page not found" />
                <meta property="twitter:description" content="Page not found" />
                <meta property="twitter:image" content={"https://raw.githubusercontent.com/nawafalqari/sch/main/logo/sch_t.png"} />
            </Head>

            <Center>
                <Image src={PageNotFoundImage} alt={'Page Not Found'} width={450} height={450} />
            </Center>
            <Text align={'center'} size={'xl'}>Go back to <Link href={'/'} style={{textDecoration: 'none', color: 'white', fontWeight: 500}}>Home</Link></Text>
        </>
    )
}

export default PageNotFound