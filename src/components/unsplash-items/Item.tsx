import React from 'react';

export interface Unsplash {
  id: string;
  likes: number;
  description: string | null;
  alt_description: string;
  color: string | null;
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string,
  };
  user: {
    id: string,
    name: string, //full name
    first_name: string,
    last_name: string,
    location: string,
  }
}

export const Items = (props: Unsplash) => {
  return (
    <div style={{border: "2px solid black"}}>
      <p>{props.likes}</p>
      <img src={props.urls.small} alt={props.alt_description} />
    </div>
  )
}
