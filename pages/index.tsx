import type { NextPage } from 'next'
import { Text, rem } from '@mantine/core'
import { IconBrandOpenSource, IconCookieOff, IconPalette, IconServer2, IconSlash, IconSpy } from '@tabler/icons-react'
import FeaturesCards from '@/components/FeaturesCards'
import HeroHeader from '@/components/HeroHeader'
import Head from 'next/head'
import Logo from '@/public/Logo.svg'

const Home: NextPage = () => {
    type features = {
        title: string,
        description: string,
        icon: JSX.Element,
    }[]

    const features: features = [
        {
            title: 'Privacy',
            description: `You don't have to tell us about your name, age, email, nationality or any thing about you.`,
            icon: <IconSpy size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'No Cookies',
            description: `We don't use cookies to increase our communication platform's user privacy.`,
            icon: <IconCookieOff size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Your Own Server',
            description: `You can use our default server but if you don't want use our server then you can use your own server.`,
            icon: <IconServer2 size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Themes',
            description: 'You can choose theme from many different themes.',
            icon: <IconPalette size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Commands',
            description: 'We made some commands to make our communication platform easy to use.',
            icon: <IconSlash size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Open Source',
            description: 'Our communication platform is open source so you can check code and make your own features.',
            icon: <IconBrandOpenSource size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
    ]

    return (
        <>

            <Head>
                <title>SCH</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="SCH" />
                <meta name="description" content="SCH" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sch.nawafdev.com/" />
                <meta property="og:title" content="SCH" />
                <meta property="og:description" content="SCH" />
                <meta property="og:image" content={Logo.src} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sch.nawafdev.com/" />
                <meta property="twitter:title" content="SCH" />
                <meta property="twitter:description" content="SCH" />
                <meta property="twitter:image" content={Logo.src} />
            </Head>

            <HeroHeader />
            <Text size={30} weight={900} align={'center'}>Features:</Text>
            <br />
            <FeaturesCards features={features} />
        </>
    )
}

export default Home