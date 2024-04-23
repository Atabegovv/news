import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { IPartnerArticle } from '../../types';
import { getPartnersArticles } from '../../api';

export const AdminArticles: FC = () => {
    const [articles, setArticles] = useState<IPartnerArticle[]>([]);

    useEffect(() => {
        (async () => {
            const articles = await getPartnersArticles();

            setArticles(articles);
        })();
    }, []);
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
                {articles.map((item) => (
                    <Grid item xs={3} key={item.id}>
                        <Link to={`/admin/edit/${item.id}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
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
