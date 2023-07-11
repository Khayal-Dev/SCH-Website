import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },
}))

interface HeaderResponsiveProps {
    links: {
        link: string,
        label: string,
    }[]
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
    const [opened, { toggle, close }] = useDisclosure(false)
    const { classes } = useStyles()

    const items = links.map((link) => (
        <Link
            key={link.link}
            href={link.link}
            className={classes.link}
            onClick={() => {
                close()
            }}
        >
            {link.label}
        </Link>
    ))

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Image src={Logo} alt='SCH Logo' height={50} width={50} loading={'eager'} />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' aria-label={'Toggle links dropdown'} />

                <Transition transition='pop-top-right' duration={200} mounted={typeof opened === 'undefined' ? false : opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    )
}