'use client'

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Typography, Button, AppBar, Toolbar, rgbToHex } from "@mui/material";
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AppBar position="static" sx={{backgroundColor: 'rgba(253, 101, 119)'}}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} className="bangers" sx={{fontFamily: 'Bangers, sans-serif'}}>
            PopCards
          </Typography>
          <SignedOut>
            <Link href="/sign-in" passHref>
              <Button variant="contained" 
                sx={{ marginRight: 2, 
                      backgroundColor: 'rgb(255, 255, 255)', 
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 6)',
                        transform: 'scale(1.05)'},
                        color: 'rgba(253, 101, 119)', 
                        fontFamily: 'Lato, sans-serif', 
                        fontWeight: 700,}}>Login</Button>
            </Link>
          
            <Link href="/sign-up" passHref>
              <Button variant="contained" 
                sx={{
                  backgroundColor: 'rgb(255, 255, 255)', 
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    transform: 'scale(1.05)'},
                    color: 'rgba(253, 101, 119)', 
                    fontFamily: 'Lato, sans-serif', 
                    fontWeight: 700,}}>Sign Up</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            {/* Make sure UserButton is correctly imported and used */}
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ textAlign: 'center', position: 'relative', overflow: 'hidden', height: 610, backgroundColor: 'rgba(255, 255, 255, 0.2)', }}>
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
          padding: 20,
          zIndex: 1, 
        }}>
          <Typography variant="h2" component="h1" gutterBottom className='bangers' sx={{fontFamily: 'Bangers, sans-serif'}}>
            Welcome to PopCards
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{fontFamily: 'Lato, sans-serif', fontWeight: 600,}}>
            Where Comic Book Magic Meets High School Mastery with Flashcards That Pop! 📚💥
          </Typography>
          <Link href="/generate" passHref>
            <Button variant="contained"
              sx={{ mt: 2, mr: 2,
                backgroundColor: 'rgb(255, 255, 255)', 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  transform: 'scale(1.05)'},
                  color: 'rgba(253, 101, 119)', 
                  fontFamily: 'Lato, sans-serif', 
                  fontWeight: 700,}}>
              Start Generating
            </Button>
          </Link>
          <Button variant="outlined" 
            sx={{ mt: 2, 
              border: '2px solid white', 
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                transform: 'scale(1.05)',
                border: '2px solid white'},
              color: 'rgba(253, 101, 119)', 
              fontFamily: 'Lato, sans-serif', 
              fontWeight: 700,}}>
            Learn More
          </Button>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', backgroundColor: 'rgba(254, 244, 222, 0.5)', height: 400,}}>
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
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 400, backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
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
    </>
  );
}
