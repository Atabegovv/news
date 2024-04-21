import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AdminArticleItem: FC = () => {
    const { id }: { id?: string } = useParams();
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Typography variant="h4" gutterBottom>
                        {id ? 'Как сдалать' : 'Новая статья'}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <Button variant="contained" color="success">
                            Сохранить
                        </Button>
                        {id && (
                            <Button variant="outlined" color="error" sx={{ marginLeft: '10px' }}>
                                Удалить
                            </Button>
                        )}
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Компания" id="fullWidth" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Название статьи" id="fullWidth" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Подводка" id="fullWidth" multiline maxRows={3} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Техст" id="fullWidth" multiline rows={3} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="https://placehold.co/600x400?text=Hello+World"
                                alt="green iguana"
                            />
                            <CardContent>
                                <input type={'file'} />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};
