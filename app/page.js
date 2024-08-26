'use client'

import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Container, Box, Typography, Button } from "@mui/material"; // Corrected imports
import Head from 'next/head'; // Correct import for Head

export default function Home() {

  const handleSubmit = async () => {
    try {
      const checkoutSession = await fetch('/api/checkout_session', {
        method: 'POST',
      });

      const checkoutSessionJson = await checkoutSession.json();

      if (checkoutSession.status === 500) {
        console.error(checkoutSessionJson.message);
        return;
      }

      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: checkoutSessionJson.id,
      });

      if (error) {
        console.warn(error.message);
      }
    } catch (err) {
      console.error('Error during checkout:', err);
    }
  };

  return (
    <Container maxWidth="lg">
      <Head>
        <title>PopCards</title>
        <meta name="description" content="Create flashcards from your text"></meta>
      </Head>
      
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to PopCards
        </Typography>
        <Typography variant="h5" gutterBottom>
          Create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Start Checkout
        </Button>
      </Box>
    </Container>
  );
}
