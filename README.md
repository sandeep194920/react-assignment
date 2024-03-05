# React Project (Assignment)

[Please access the deployed site here](https://master--react-assignment-scrawlr.netlify.app/)

### Coding Approach

- It was fun to code this app.
- I have used Vite, React-Testing-Library for tests, and plain CSS for styling

##### Components

- All the components are reusable.
- For Icon, `Icon.tsx` is made in such a way that it can be used both for UpVote Icon and also Plus Icon, for adding new UpVote. They both are differentiated using the props passed to them which is very convenient and extensible.
- Votes component represent a single row capable of holding multiple UpVote icons.
- LocalStorage class has been implemented to store all the functions of local-storage crud operations. This can be extended to add more functionalities in the future.
- Used custom hook `useGlobalContext` for state management. This makes it easy to call any handler functions from anywhere in the app.

##### Additional functionality

- Added additional functionality like the provision to add more rows using `+` icon below all the rows.
- Also added a Reset button to clear the state stored in the local-storage. This makes it easy to test the app without having to manually clear the storage.

### Tackling Challenges and Solutions

##### Dynamic SVG Color Implementation

- In Vite project, unlike Create-React-App, in order to dynamically import SVGs and change props on them, we need to install a dependency called [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr).
- This way, we can set the fill color of svg using css to make the SVG component dynamic. The fill color we set will override the color defined in svg
- This is one of the cleaner approaches to change the SVG props dynamically.

##### Implementing React-Testin-Library

- Vite doesn't come with built-in support for RTL, hence took some time to figure out the configs for test
- Installed some additional dev packages and added test configs to overcome the challenges

_I hope I've covered all the use cases mentioned in the requirement file. [I have deployed it on Netlify and you can access it here](https://master--react-assignment-scrawlr.netlify.app/). It was really a fun project and thanks for the opportunity. Awaiting for your feedback. Thank you._
