# TA Fund Allocator
### The process
This project was enjoyable - one that I was happy to give just a little more TLC. But how did I do it?

##### Pre-implementation phase
- The first thing I did was ruminate on the requirement long enough to capture what was being asked. Touching code at this point would be meaningless and harmful if attempted.
- After grasping the functional requirements, I decided to mock up a UI. This visual representation gives me a good idea of process flows, data models, some areas of potential technical challenges, as well as usability.
- The UI mock up process led directly into choosing the right technology for the job. I decided to use Reactjs as I have experience with this client side library.

##### Implementation phase
- Having gotten a good idea of what I would be building from making the mockups, I decided on project structure. I decided to use
  - src/
    - dataModel
    - service (I scrapped this when I re-created the app the third time)
    - components
This made sense initially, so I continued.
- I initially started with my data model and a Typescript project, but soon switched to implementing the lower level component. The thought behind this was modularity in design. I figured that if the project was ever to grow, it could benefit from having separate _dumb_ components versus _logic_ based components. I tried to lift state and intense functions outside of this component.
- I knew I needed cross component communication and decided that, for the simplicity of the app, to use React Context API. This is a very easy way to move state around without too much boilerplate. This soon turned out to be a shortcut not worth taking.
- Having multiple issues with state update, I decided to use Redux which has a more predictable update mechanism as well as better able to handle rapid DOM updates without forcing as many component refreshes as Context API does.
- After implementing all the functional requirements, I focused on validation and code management. Code management meant I moved logic/code from where they shouldn't be to where they should be. The aim of this was for future maintenance and possible code expansion.

##### Challenges
- The first challenge was deciding to make it pretty, when the requirements explicitly said the outcome didn't have to be that pretty.
- Secondly, I re-made the project a few times due to node_modules corruption. This was highly frustrating and was due to Typescript with React. I ended up using `jsx` instead.
- The biggest challenge, by far, was using React's Context API. As simple as it was to implement and use, my reluctance to use it in the first place quickly became apparent. Context API is not as fast as `useState` or `redux`. Though I knew this, I was hoping for good results, seeing that the app was so small. What happened was state being updated so asynchronously  (due to component refreshes), that I had state corruption. The ultimate decision was to use `redux` or some other state management designed to handle fast data changes, and, more importantly, did not refresh every component on each change.
  All components were somewhat connected to a central `onChange` handler so I could perform centralized validation or any other check before the data is saved to the store. Because of this, using Context API caused many unnecessary re-renders - a problem that using `redux` fixed.

##### What I would do differently with more time
I would do a few more things and some other things different:
- With more time, I would definitely make the app more user friendly.
- I would organize the folder structure more for easy navigation. Having too many nested folders can cause cognitive overload.
- I would use Typescript simply because Javascript is too forgiving with typing mistakes. Not having a typed project, in my experience, is a headache waiting to happen.
- I would **definitely** write unit tests to ensure integrity in the allocation computing logic and validation.
- I would remove the logic from the reducers to its own location. We may not always use `redux` for state management. We may even go serverless or share logic across web and mobile React apps. By having the logic live separately, we can easily switch out UIs, platforms, and custom libraries, and more.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
