import { Center } from '@mantine/core'
import type {NextPage} from 'next'
import UnderConstruction from '@/public/UnderConstruction.svg'
import Image from 'next/image'
import Head from 'next/head'
import Logo from '@/public/Logo.svg'

const Guide: NextPage = () => {
    return (
        <>

            <Head>
                <title>SCH Guide</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="SCH Guide" />
                <meta name="description" content="SCH Guide" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sch.nawafdev.com/guide" />
                <meta property="og:title" content="SCH Guide" />
                <meta property="og:description" content="SCH Guide" />
                <meta property="og:image" content={Logo.src} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sch.nawafdev.com/guide" />
                <meta property="twitter:title" content="SCH Guide" />
                <meta property="twitter:description" content="SCH Guide" />
                <meta property="twitter:image" content={Logo.src} />
            </Head>

            <Center style={{marginTop: '-30px'}}>
                <Image src={UnderConstruction} alt={'Under Construction'} height={450} width={450} loading={'eager'} />
            </Center>
        </>
    )
}

export default Guide