'use client'

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Typography, Button, AppBar, Toolbar, rgbToHex } from "@mui/material";
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  
  const handleClick = (e) => {
  e.preventDefault();
  const target = document.getElementById('learn-more');
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth' // This makes the scroll smooth
    });
  }
};
  
  return (
    <>
      <AppBar position="static" sx={{backgroundColor: 'rgba(253, 101, 119)'}}>
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }} className="bangers" sx={{fontFamily: 'Bangers, sans-serif'}}>
            PopCards
          </Typography>
          
        </Toolbar>
      </AppBar>
      
      <Box sx={{ textAlign: 'center', position: 'relative', overflow: 'hidden', height: 780, backgroundColor: 'rgba(255, 255, 255, 0.2)', }}>
        {/* Add the GIF image as background */}
        <img 
          src="/1.gif"
          alt="Background GIF"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1, // Place behind content
          }}
        />
        <Box sx={{ 
          position: 'relative', 
          padding: 30,
          zIndex: 1, 
        }}>
          <Typography variant="h2" component="h1" gutterBottom className='bangers' sx={{fontFamily: 'Bangers, sans-serif'}}>
            Welcome to PopCards
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{fontFamily: 'Lato, sans-serif', fontWeight: 600,}}>
            Where Comic Book Magic Meets High School Mastery with Flashcards That Pop! 📚💥
          </Typography>
          <Link href="/#join" passHref>
            <Button variant="contained"
              sx={{
                mt: 2,
                border: '2px solid white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  transform: 'scale(1.05)',
                  border: '2px solid white'
                },
                color: 'rgba(253, 101, 119)',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
              }}
              onClick={handleClick}>
                Join the Waitlist!
            </Button>
          </Link>
          <Link href="/#learn-more" passHref>
            <Button variant="outlined" 
              sx={{
                mt: 2,
                border: '2px solid white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  transform: 'scale(1.05)',
                  border: '2px solid white'
                },
                color: 'rgba(253, 101, 119)',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
              }}
              onClick={handleClick}>
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>
      <Box id="learn-more" sx={{ position: 'relative', backgroundColor: 'rgba(254, 244, 222, 0.5)', height: 400,}}>
        <img 
          src="/6.png"
          alt="Image"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            paddingTop: 10,
            paddingRight: 30,
          }}
        ></img>
        
          <Typography variant="h4" component="h2" gutterBottom sx={{ paddingTop: 12, paddingLeft: 4, width: 780, fontWeight: "700", fontFamily: 'Lato, sans-serif'}}>
            Ready to turn study time into a comic book adventure? 📚
          </Typography>
            <Typography variant="h4" component="h2" gutterBottom sx={{ paddingTop: 1, paddingLeft: 4, width: 780, height: 780, fontFamily: 'Lato, sans-serif', fontWeight: "400",}}>
            With PopCards, learning is all about the thrill of knowledge bursting off the page! 
            💥
          </Typography>
      
      </Box>
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 440, backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
        <img 
            src="/3.gif"
            alt="Background GIF"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1, // Place behind content
          }}
        ></img>
      </Box>
      <Box sx={{ position: 'relative', backgroundColor: 'rgba(254, 244, 222, 0.5)', height: 400,}}>
        <img 
          src="/2.gif"
          alt="Image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '400px',
            height: '400px',
            objectFit: 'contain',
            paddingBottom: 60,
            paddingLeft: 50,
          }}
        ></img>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'right', paddingTop: 12, paddingLeft: 60, paddingRight: 4,  height: 780, fontFamily: 'Lato, sans-serif', fontWeight: "400",}}>
            Unleash your inner academic superhero and make your studies as exciting as the latest blockbuster! 🎬✨
          </Typography>
      </Box>
      <Box id="join" sx={{ position: 'relative', backgroundColor: 'rgba(254, 244, 222, 0.2)'}}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', paddingTop: 2, fontFamily: 'Bangers, sans-serif', fontWeight: "400",}}>
          Join the Waitlist!
        </Typography>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeOP2AGJfYySwv87bBvpGQPrn6qtO5dxEToTv55xvRwtA1udQ/viewform?embedded=true"
            width="100%"
            height="700"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Google Form"
            style={{ border: 'none' }}
          >
            Loading…
          </iframe>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', paddingTop: 2, fontFamily: 'Lato, sans-serif', fontWeight: "400",}}>
          
        </Typography>
      </Box>
    </>
  );
}
