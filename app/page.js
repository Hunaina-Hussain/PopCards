'use client'

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} className="bangers">
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
      
      <Box sx={{ textAlign: 'center', position: 'relative', overflow: 'hidden', height: 400, backgroundColor: 'rgba(0, 0, 0, 0.1)', }}>
        {/* Add the GIF image as background */}
        <Image
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
        <Box sx={{ paddingTop: 10 }}>
          <Typography variant="h2" component="h1" gutterBottom className="bangers">
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
      </Box>
      <Box sx={{ position: 'relative'}}>
        <Image
          src="/16.png"
          alt="Image"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '500px',
            height: '500px',
            objectFit: 'cover',
            
          }}
        />
        <Typography variant="h3" component="h2" gutterBottom sx={{ paddingTop: 10, paddingLeft: 2, width: 780, fontWeight: "bold",}}>
          Ready to turn study time into a comic book adventure? 
        </Typography>
          <Typography variant="h3" component="h2" gutterBottom sx={{ paddingTop: 1, paddingLeft: 2, width: 780, height: 780,}}>
          With PopCards, learning is all about the thrill of knowledge bursting off the page! 
          💥 

        </Typography>
      </Box>
    </>
  );
}
