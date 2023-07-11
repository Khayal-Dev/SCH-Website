import { createStyles, Text, Card, SimpleGrid, Container, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
    },

    cardTitle: {
        '&::after': {
            content: `''`,
            display: 'block',
            backgroundColor: '#FFFFFF',
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },

    hoverable: {
        transition: 'box-shadow 0.25s',
        '&:hover': {
            boxShadow: '0 -4px 17px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.49)',
            WebkitAppearance: 'none',
        }
    }
}))

interface FeaturesCardsProps {
    features: {
        title: string,
        description: string,
        icon: JSX.Element,
    }[]
}

export default function FeaturesCards({ features }: FeaturesCardsProps) {
    const { classes, theme } = useStyles()

    return (
        <Container size='lg'>
            <SimpleGrid cols={3} spacing='xl' breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {
                    features.map((feature) => (
                        <Card key={feature.title} shadow='md' radius='md' className={`${classes.card} ${classes.hoverable}`} padding='xl'>
                            {feature.icon}
                            <Text fz='lg' fw={500} className={classes.cardTitle} mt='md'>
                                {feature.title}
                            </Text>
                            <Text fz='sm' c='dimmed' mt='sm'>
                                {feature.description}
                            </Text>
                        </Card>
                    ))
                }
            </SimpleGrid>
        </Container>
    )
}