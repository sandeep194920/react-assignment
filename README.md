# React Project (Assignment)

### Tackling Challenges and Solutions

##### Dynamic SVG Color Implementation

- In Vite project, unlike Create-React-App, in order to dynamically import SVGs and change props on them, we need to install a dependency called [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr).
- This way, we can set the fill color of svg using css to make the SVG component dynamic. The fill color we set will override the color defined in svg
- This is one of the cleaner approaches to change the SVG props dynamically.
