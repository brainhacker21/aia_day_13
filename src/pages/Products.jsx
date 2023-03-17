import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';

import { useState, useEffect } from "react"
import { maxHeight } from '@mui/system';

const Products = () => {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=6916b5833979b9f679193d591cd740a7&language=en-US&page=1"
  const [movies, setMovies] = useState([])
  const getMovies = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log("Error: ", error))
  }

  useEffect(() => {
    getMovies(url)
  }, [])

  console.log(movies)
  return (
    <div>
      {movies.map((movie, index) => {
        // console.log(movie)
        return (
          <Card  sx={{ maxWidth: 200, display:'inline-block', maxHeight: 500 , margin: 2}}>
            <CardActionArea>
              <CardMedia 

                component="img"
                display="inline"
                height="100%"
                image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="green iguana"
              />
              <CardContent sx={{}}>
                <Typography gutterBottom variant="h6" component="div" lineHeight={1.2} >
                  {movie.original_title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {movie.overview}

                </Typography>

              </CardContent>

            </CardActionArea>

          </Card>

        )

      })}

    </div>

  )



}



export default Products