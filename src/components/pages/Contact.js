import React from 'react';

export default function Contact() {
  return (
    <div class="text-center">
      <h1 class="title p-5">Contact Me</h1>
      <div class="d-flex flex-direction-row">
        <a href="mailto:millerjboyd@gmail.com" class="card col-lg-3 text-decoration-none py-5 px-1">
          <h2>Email</h2>
          <p>millerjboyd@gmail.com</p>
        </a>
        <a href="https://github.com/Millerb7" class="card col-lg-3 text-decoration-none py-5 px-1">
          <h2>GitHub</h2>
          <p>Millerb7</p>
        </a>
        <a href="https://www.linkedin.com/in/miller-compsci/" class="card col-lg-3 text-decoration-none py-5 px-1">
          <h2>LinkedIn</h2>
          <p>Miller Boyd</p>
        </a>
        <a href="https://twitter.com/WindmillBoyd" class="card col-lg-3 text-decoration-none py-5 px-1">
          <h2>Twitter</h2>
          <p>WindmillBoyd</p>
        </a>
      </div>
    </div>
  );
}
