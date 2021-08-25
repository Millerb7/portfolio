import React from 'react';

export default function Blog() {
  return (
    <div>
      <h1 class="title text-center p-5">My Resume</h1>
      <embed src="./Resume.pdf" 
              frameBorder="0"
              scrolling="auto"
              width="100%"
              id="resume">
      </embed>
    </div>
  );
}
