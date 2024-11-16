import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const init_url = "https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhemV8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={init_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div>Temperature = {info.temp}&deg;C</div>
         <div>FeelsLike = {info.feelslike}</div>
         <div>Min Temp = {info.tempMin}&deg;C</div>
         <div>Max Temp = {info.tempMax}&deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <div>Weather = {info.weather}</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}