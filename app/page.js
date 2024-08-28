'use client'

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Container, Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            PopCards
          </Typography>
          <SignedOut>
            <Link href="/sign-in" passHref>
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="/sign-up" passHref>
              <Button color="inherit">Sign Up</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            {/* Make sure UserButton is correctly imported and used */}
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ textAlign: 'center', my: 4, position: 'relative', overflow: 'hidden' }}>
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
        
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to PopCards
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Where Comic Book Magic Meets High School Mastery with Flashcards That Pop! 📚💥
        </Typography>
        <Link href="/generate" passHref>
          <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
            Start Generating
          </Button>
        </Link>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Box>
    </>
  );
}
