import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import HeaderResponsive from '@/components/Header'
import FooterWithSocialMedias from '@/components/Footer'

export default function App(props: AppProps) {
    const { Component, pageProps } = props

    type link = {
        link: string,
        label: string,
    }
    
    const HeaderLinks: link[] = [
        {
            link: '/',
            label: 'Home',
        },
        {
            link: '/guide',
            label: 'Guide',
        },
        {
            link: 'https://github.com/nawafalqari/sch/',
            label: 'GitHub',
        },
        {
            link: 'https://github.com/nawafalqari/sch/releases/',
            label: 'Download',
        },
    ]

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark',
                }}
            >
                <HeaderResponsive links={HeaderLinks} />
                <main style={{ minHeight: '100vh' }}>
                    <Component {...pageProps} />
                </main>
                <FooterWithSocialMedias />
            </MantineProvider>

        </>
    )
}