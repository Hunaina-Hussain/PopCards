'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@react-oauth/google';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  CircularProgress,
  Alert,
} from '@mui/material';
import { db } from '../firebase'; // Ensure this path is correct
import { collection, doc, getDocs } from 'firebase/firestore';

export default function Flashcard() {
  const { user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;

      try {
        setLoading(true);
        const colRef = collection(doc(collection(db, 'users'), user.id), search);
        const docs = await getDocs(colRef);
        const flashcards = [];
        docs.forEach((doc) => {
          flashcards.push({ id: doc.id, ...doc.data() });
        });
        setFlashcards(flashcards);
      } catch (err) {
        setError('Failed to load flashcards.');
      } finally {
        setLoading(false);
      }
    }
    getFlashcard();
  }, [search, user]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                <CardContent>
                  <Box sx={{ position: 'relative', height: '200px', perspective: '1000px' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transition: 'transform 0.6s',
                        transform: flipped[flashcard.id]
                          ? 'rotateY(180deg)'
                          : 'rotateY(0deg)',
                      }}
                    >
                      <Typography variant="h5" component="div">
                        {flipped[flashcard.id] ? flashcard.back : flashcard.front}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
