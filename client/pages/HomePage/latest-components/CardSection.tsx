import React from 'react';
import Image from 'next/image';
import classes from '../HomePage.module.scss';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
    Button
} from '@mui/material';

type CoreCardProps = {
    icon: string;
    subTitle: string;
    title: string;
    description: string;
};

const CoreCard: React.FC<CoreCardProps> = ({
    icon,
    subTitle,
    title,
    description,
}) => {
    return (
        <Card sx={{ height: '100%', overflow:'visible' }}>
            <CardContent>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>{subTitle}</Box>
                        <Box className={classes.cardImage}><Image src={icon} alt="" width="100%" height="85px"/></Box>
                    </Box>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card >
    );
};

const CARD_PROPS: CoreCardProps[] = [
    {
        icon: "/images/icons/shape-7.png",
        subTitle: '01',
        title: 'Cost',
        description: 'Launchpad: 5% Mint Doxxing with Certificate: 200$FLY (soft) - 400 $FLY (extensive) Incubation Services: Inquire for pricing via Get Started.'
    },
    {
        icon: "/images/icons/shape-1.png",
        subTitle: '02',
        title: 'Mint Page',
        description: 'Make your mint page completely customised to however you want, no limit to what you can have..'
    },
    {
        icon: "/images/icons/shape-4.png",
        subTitle: '03',
        title: 'Whitelist',
        description: 'We support whitelist of any type and invite people to your NFT community in order to get whitelisted.'
    },
    {
        icon: "/images/icons/shape-3.png",
        subTitle: '04',
        title: 'Support',
        description: 'We are active 24/7 and will be in constant contact with you keeping you updated.'
    },
    {
        icon: "/images/icons/shape-6.png",
        subTitle: '05',
        title: 'Sales Bot',
        description: 'Track all of your sales on secondary market on Discord or Twitter.'
    },
    {
        icon: "/images/icons/shape-2.png",
        subTitle: '06',
        title: 'Dashboard',
        description: 'Monitor your mint and collection in real-time.'
    }
];
const CardSection = () => {
    return (
        <Stack spacing={4}>
            <Box>
                <Typography
                    variant="h4"
                    display="inline"
                // sx={{
                //     borderBottom: (theme) => `4px solid ${theme.palette.primary.main}`,
                // }}
                >
                    Why should you FlyStart?
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={4} alignItems="stretch">
                    {CARD_PROPS.map((info) => {
                        return (
                            <Grid item xs={12} sm={6} lg={4} key={info.title}>
                                <CoreCard {...info} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Stack>
    );
};

export default CardSection;
