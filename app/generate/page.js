'use client';

import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Card, CardContent } from '@mui/material';

export default function Generate() {
  const [topic, setTopic] = useState('');
  const [numCards, setNumCards] = useState(5); // Default number of flashcards
  const [flashcards, setFlashcards] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic to generate flashcards.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ topic, numCards }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to generate flashcards');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setFlashcards(data.flashcards || []);
    } catch (error) {
      console.error('Error generating flashcards:', error);
      alert('An error occurred while generating flashcards. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Flashcards
        </Typography>
        <TextField
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          label="Enter topic"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          type="number"
          value={numCards}
          onChange={(e) => setNumCards(parseInt(e.target.value, 10))}
          label="Number of cards"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          inputProps={{ min: 1 }} // Ensure at least 1 card
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Generating...' : 'Generate Flashcards'}
        </Button>
      </Box>

      {flashcards.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Generated Flashcards
          </Typography>
          <Grid container spacing={2}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Front:</Typography>
                    <Typography>{flashcard.front}</Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>Back:</Typography>
                    <Typography>{flashcard.back}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}