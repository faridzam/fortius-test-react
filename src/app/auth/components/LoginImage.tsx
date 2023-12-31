import { Grid } from "@mui/material";

export default function LoginImage(){
  return(
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img src="https://source.unsplash.com/random?wallpapers" alt="image_login" style={{objectFit: 'cover'}} />
    </Grid>
  )
}