import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

const News = () => {
    return(
        <Grid container spacing={80}>
        <Grid item xs={3}>
            <Card sx={{ minWidth: 500 }} style={{backgroundColor: "#00d4ff", margin: 50}}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <span>Hírek Most!!!</span>
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <span>                   
                    Vajon mikor lesz vége a videokártyák rohamos áremelkedésének?! 
                    Szakértőinket kérdeztük róla!!!                   
                </span>
                </Typography>
                <Typography variant="body2">
                    <span>
                    Elkezdett be esni a kriptovaluta! A bányászok elkezdték kvázi elárverezni a gépeiket.
                    Hova vezethet ez? Fellélegezhet a piac végre?
                    </span>
                    <br />
                    
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Tudj meg többet</Button>
                </CardActions>
            </Card>
            
        </Grid>
        <Grid item xs={3}>
            <Card sx={{ minWidth: 800 }} style={{backgroundColor: "#00d4ff", margin: 50}}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <span>Hatalmas nyári Akciók!!!</span>
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <span>
                    Nézzen be webshoppunkra!! Garantáltan megtalálja az Önnek megfelelő perifériát!
                </span>
                </Typography>
                <Typography variant="body2">
                    <span>
                    Szeret gamelni?!
                    Ne habozzon, videokártyák, alaplapok, processorok és még sok minden más alkalmi áron!!!!!
                    </span>
                    <br />
                    
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Tudj meg többet</Button>
                </CardActions>
            </Card>
            
        </Grid>          
        </Grid>
     
     );
};

export default News;
