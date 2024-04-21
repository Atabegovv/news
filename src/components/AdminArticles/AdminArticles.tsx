import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export const AdminArticles: FC = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Typography variant="h4" gutterBottom>
                        Партнерские статии
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/admin/create">
                        <Button variant="contained" color="success">
                            Добавить
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={3} key={item}>
                        <Link to={`/admin/edit/${item}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://placehold.co/600x400?text=Hello+World"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
