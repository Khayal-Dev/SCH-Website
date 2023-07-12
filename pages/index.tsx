import type { NextPage } from 'next'
import { Text, rem } from '@mantine/core'
import { IconLock, IconCookieOff, IconHourglass, IconMailFast, IconServer2, IconSlash } from '@tabler/icons-react'
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
            title: 'End-to-End Encryption',
            description: `SCH ensures the privacy and security of user conversations by implementing robust end-to-end encryption. Messages exchanged between users are encrypted and can only be decrypted by the intended recipients.`,
            icon: <IconLock size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Secure and Temporary Messages',
            description: `SCH ensures that messages are not stored on any servers or devices. Once all parties exit the conversation room, the messages are completely wiped out, leaving no trace behind. This temporary nature of messages adds an extra layer of security and privacy to your conversations.`,
            icon: <IconHourglass size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Trustworthy Communication Environment',
            description: `SCH prioritizes user privacy by avoiding the use of cookies, trackers, and data collection mechanisms. It aims to create a secure and private communication environment where users can exchange messages without concerns about their privacy being compromised.`,
            icon: <IconCookieOff size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Host Your Own Servers',
            description: `SCH allows users to host their own chat servers, giving them full control over their data and privacy. You can set up your own server infrastructure and customize the environment according to your needs.`,
            icon: <IconServer2 size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Command-Based Chat',
            description: `SCH supports various commands to enhance your chat experience. You can use commands like /nick to change your nickname, /whisper to send private messages, and more. These commands provide additional functionality and customization options.`,
            icon: <IconSlash size={rem(50)} stroke={2} color={'#FFFFFF'} />,
        },
        {
            title: 'Lightweight and Fast',
            description: `SCH is designed to be lightweight and fast, ensuring quick message delivery and a responsive user interface. The application optimizes resource usage to provide a seamless messaging experience.`,
            icon: <IconMailFast size={rem(50)} stroke={2} color={'#FFFFFF'} />,
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
                <meta property="og:image" content={"https://raw.githubusercontent.com/nawafalqari/sch/main/logo/sch_t.png"} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sch.nawafdev.com/" />
                <meta property="twitter:title" content="SCH" />
                <meta property="twitter:description" content="SCH" />
                <meta property="twitter:image" content={"https://raw.githubusercontent.com/nawafalqari/sch/main/logo/sch_t.png"} />
            </Head>

            <HeroHeader />
            <Text size={30} weight={900} align={'center'}>Features:</Text>
            <br />
            <FeaturesCards features={features} />
        </>
    )
}

export default Home