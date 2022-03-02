# StarTree App Exercise

Lightweight Pokemon Info React application. Tracks the following values in the UI across two pages: 
- pokemon name
- pokemon image
- pokemon height
- pokemon weight
- pokemon moves
- list of favorite pokemon

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Implement

Via Github: 
Navigate to https://github.com/tmowery09/pokemon
Under the Code button, copy the link to clone the repository
Run npm install inside the dir with package.json
Run npm start in dir with package.json
App will launch in default browser

## Additional Notes for Reviewer
Thank you for giving me the opportunity to build this app, and also for taking the time to review it! Although I know we have a meeting to discuss the app & to help you get a sense of my thought process, there were a few things I wanted to add:

- I wanted to write this application using React even though the bulk of my recent professional experience is in Angular because I felt it would be more useful for you to review than writing it in a framework that isn't very popular in 2022. 

- If I were making this for production, I would build out a type ahead input that suggested pokemon as the user typed their input. As a user I would expect to be able to search by a partial name and have it return a list of potential pokemon.

- The error handling is (too) minimal as implemented, and I would add additional error handling were this for production. Assuming I would have access to a database, there would be service calls to add/remove a pokemon to the favorites list, and those would include helpful error handling on the frontend for the user. I also included very basic built-in window confirm modals for removing pokemon & clearing, but would plan to build out a modal that fit the rest of the application were this production.

- Lastly, I interpreted "allow them to easily get more information about these pokemon" from the directions as a dialog with additional info sent from the API, so I made an extremely basic version of that. However I could see how maybe the team woul d have preferred just a link opening in another tab to some additional pokemon information, such as on wikipedia, so I apologize if I misinterpreted that instruction.

Thank you again for your time and patience!
Tasha Mowery

## Scripts (from Create React App README)
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.