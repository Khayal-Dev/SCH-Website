import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandDiscord } from '@tabler/icons-react'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}))

export default function FooterWithSocialMedias() {
    const { classes } = useStyles()

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Image src={Logo} alt='SCH Logo' height={50} width={50} />
                <Group spacing={0} className={classes.links} position='right' noWrap>
                    <Link href={'https://discord.gg/Az8McWNAcg'}>
                        <ActionIcon size='lg'  aria-label={'Join Our Discord'}>
                            <IconBrandDiscord size='1.05rem' stroke={1.5} />
                        </ActionIcon>
                    </Link>
                    <Link href={'https://twitter.com/nawafalqari2'}>
                        <ActionIcon size='lg' aria-label={'My Twitter Account'}>
                            <IconBrandTwitter size='1.05rem' stroke={1.5} />
                        </ActionIcon>
                    </Link>
                </Group>
            </Container>
        </div>
    )
}