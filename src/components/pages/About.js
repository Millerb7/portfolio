import React from 'react';

export default function About() {
  return (
    <div>
        <figure class="position-relative" id="cover">
            <img src="./fonrtal_code.png" id="cover-photo" alt="it me"/>
            <div class="col-sm-12 col-md-12 position-absolute d-flex flex-column pr-4" id="about-me">
                <h2 class="pb-2">About Me</h2>
                <h3 class="pt-3">
                    Hello and welcome to my Web Portfolio! My name is Miller Boyd and I am a computer science student and web developer. I have experience in Java, C++, C, 
                    Python, HTML, CSS and Javascript. I have years of using C++ and Java under my belt as a student, however I am new to web development.
                </h3>
                <h4 class="pt-3">
                    I am now on my way to becoming a Web Developer. I enjoy all facets of programming, and have created many projects because of this. Click between the options
                    below to view my projects and efforts thus far. Thank you for your time and I hope you enjoy!
                </h4>
            </div>
        </figure>
    </div>
  );
}
