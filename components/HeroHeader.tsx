import { createStyles, Title, Text, Button, Container, rem, Center } from '@mantine/core'
import { IconBrandGithub, IconDownload } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(120),
        paddingBottom: rem(80),

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(80),
            paddingBottom: rem(60),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: rem(40),
        letterSpacing: -1,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.white,
    },

    description: {
        textAlign: 'center',

        [theme.fn.smallerThan('xs')]: {
            textAlign: 'center',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            height: rem(42),
            fontSize: theme.fontSizes.md,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}))

export default function HeroHeader() {
    const { classes } = useStyles()
    const router = useRouter()

    return (
        <Container className={classes.wrapper} size={1400}>
            <div className={classes.inner}>
                <Center>
                    <Title className={`${classes.title} ${classes.highlight}`}>SCH</Title>
                </Center>

                <Container p={0} size={600}>
                    <Text size='lg' color='dimmed' className={classes.description}>
                        <Text className={classes.highlight} display={'inline'}>S</Text>ecure <Text className={classes.highlight} display={'inline'}>Ch</Text>at a privacy-focused messaging application designed to provide users with a secure and confidential communication platform. It aims to protect user privacy by prioritizing data security, avoiding the use of cookies and trackers, and providing a trustworthy environment for exchanging messages.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button
                        className={classes.control}
                        size='lg'
                        sx={(theme) => ({
                            '&': {backgroundColor: '#FFFFFF', color: theme.black},
                            ':hover': {backgroundColor: theme.fn.darken('#FFFFFF', 0.2)},
                        })}
                        leftIcon={<IconDownload size={'1rem'} />}
                        onClick={() => router.push('https://github.com/nawafalqari/sch/releases/')}
                    >
                        Download
                    </Button>
                    <Button
                        className={classes.control}
                        size='lg'
                        variant='default'
                        color='gray'
                        leftIcon={<IconBrandGithub size={'1rem'} />}
                        onClick={() => router.push('https://github.com/nawafalqari/sch')}
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </Container>
    )
}