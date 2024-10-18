import React, { useState, useEffect } from 'react';
import styles from '../styles/Animes.module.css';

interface Anime {
  id: string;
  youtubeLink: string;
  insight: string;
}

interface AnimeDetails {
  title: string;
  image: string;
  genres: string[];
  rating: number;
  episodes: number;
}

const animes: Anime[] = [
  {
    id: '1',
    youtubeLink: 'https://www.youtube.com/watch?v=MGRm4IzK1SQ',
    insight: "A dark, intense series that explores humanity's struggle against gigantic humanoid creatures."
  },
  {
    id: '2',
    youtubeLink: 'https://www.youtube.com/watch?v=NlJZ-YgAt-c',
    insight: "A psychological thriller that delves into the moral implications of having the power to kill anyone."
  },
  {
    id: '3',
    youtubeLink: 'https://www.youtube.com/watch?v=--IcmZkvL0Q',
    insight: "An epic adventure following two brothers' journey to restore their bodies using alchemy."
  },
  // Add more animes as needed
];

const Animes: React.FC = () => {
  const [animeDetails, setAnimeDetails] = useState<{ [key: string]: AnimeDetails }>({});
  const [selectedAnime, setSelectedAnime] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      const details: { [key: string]: AnimeDetails } = {};
      for (const anime of animes) {
        const response = await mockFetchAnimeDetails(anime.id);
        details[anime.id] = response;
      }
      setAnimeDetails(details);
    };

    fetchAnimeDetails();
  }, []);

  const mockFetchAnimeDetails = async (id: string): Promise<AnimeDetails> => {
    const mockData: { [key: string]: AnimeDetails } = {
      '1': {
        title: 'Attack on Titan',
        image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
        genres: ['Action', 'Dark Fantasy', 'Post-apocalyptic'],
        rating: 9.0,
        episodes: 75
      },
      '2': {
        title: 'Death Note',
        image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
        genres: ['Mystery', 'Psychological Thriller', 'Supernatural'],
        rating: 9.0,
        episodes: 37
      },
      '3': {
        title: 'Fullmetal Alchemist: Brotherhood',
        image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        genres: ['Adventure', 'Dark Fantasy', 'Steampunk'],
        rating: 9.1,
        episodes: 64
      },
    };
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[id]);
      }, 500);
    });
  };

  return (
    <div className={styles.animes}>
      <h1 className={styles.title}>My Favorite Animes</h1>
      <div className={styles.animeGrid}>
        {animes.map((anime) => {
          const details = animeDetails[anime.id];
          return (
            <div 
              key={anime.id} 
              className={`${styles.animeCard} ${selectedAnime === anime.id ? styles.selected : ''}`}
              onClick={() => setSelectedAnime(selectedAnime === anime.id ? null : anime.id)}
            >
              {details && (
                <>
                  <div className={styles.imageWrapper}>
                    <img src={details.image} alt={details.title} className={styles.animeImage} />
                    <div className={styles.overlay}>
                      <p className={styles.insight}>{anime.insight}</p>
                    </div>
                  </div>
                  <div className={styles.animeInfo}>
                    <h2>{details.title}</h2>
                    <p className={styles.genre}>{details.genres.join(', ')}</p>
                    <p className={styles.rating}>Rating: {details.rating}/10</p>
                    <p className={styles.episodes}>Episodes: {details.episodes}</p>
                  </div>
                </>
              )}
              <a href={anime.youtubeLink} target="_blank" rel="noopener noreferrer" className={styles.youtubeLink}>
                Watch Trailer
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Animes;