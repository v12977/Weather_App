import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const IMG_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1427097829427-56a905bf7004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
 <div className="InfoBox">
    <div class="classCont">
    <Card sx={{ maxWidth: 345 }}>
         <CardMedia
         sx={{ height: 140 }}
         image={info.humidity>80? RAIN_URL: info.temp>15?HOT_URL:COLD_URL}
         title="green iguana"
       />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
               {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
             <p>Temperature={info.temp}&deg;C</p>
             <p>Humidity={info.humidity}</p>
             <p>Min_Temp={info.tempMin}&deg;C</p>
             <p>Max_Temp={info.tempMax}&deg;C</p>
             <p>The weather looks like:<i>{info.weather}</i></p>

         </Typography>
        </CardContent>
     
    </Card>
    </div>
         
  </div>
    );
}