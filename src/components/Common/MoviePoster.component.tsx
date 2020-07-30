import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';

interface MoviePosterProps {
  posterUrl: string;
}

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MoviePoster = ({ posterUrl }: MoviePosterProps): ReactElement => {
  const [imgUrl, setImgUrl] = useState(posterUrl);

  useEffect(() => {
    setImgUrl(posterUrl);
  }, [posterUrl]);

  return (
    <PosterImage
      src={imgUrl}
      onError={() => setImgUrl('/src/assets/img/img-placeholder-vertical.jpg')}
      alt="Movie poster"
    />
  );
};

export default MoviePoster;
