###About Verminlore

Verminlore is an unofficial fansite for the "Warhammer: End Times - Vermintide" series, and has no affiliation with its developer, Fatshark, nor do I claim any ownership of image assets used. Verminlore is roleplayed from the perspective of a historian tracking canon events from the Vermintide game, so all events depicted are fictional and creative.

###About the Project
I created this website as a practice project to utilize a development environment and work with HTML/CSS/JS. Everything is contained as a single-page app through ReactJS, and coded from scratch instead of using `create-react-app`. This was for learning purposes and to understand how different parts fit together. I used Webpack and npm scripts to manage and transpile files from the `src` directory which contains my work, into the `dist` or `docs` folder which contains the finished build published on gh-pages.
- The website is responsive and follows mobile-first design, with breakpoints at 600px, 900px, and 1200px.
- Sass was used as a css preprocessor and compiled into a separate stylesheet instead of using React `styled-components` or inline styling for two reasons: 1) separation of concerns, and allowing for designers to change styling without having to deal with JavaScript code, and 2) to practice using SCSS functionalities.
