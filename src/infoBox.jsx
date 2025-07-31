import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1581224463294-908316338239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBza3l8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className='InfoBox'>
            <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80 ? RAIN_URL : info.temp>15? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}</b><span className='icon'>{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15? <SunnyIcon/> : <AcUnitIcon/>}</span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Minimum: {info.tempMin}&deg;C</p>
          <p>Maximum: {info.tempMax}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>It feels {info.weather} here! and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
};