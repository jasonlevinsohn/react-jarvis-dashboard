import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


const colors = require('material-ui/styles/colors');

const l3Theme = {
  palette: {
    textColor: colors.lightGreen800,
  }
};


const mergedThemes = Object.assign(darkBaseTheme, l3Theme);

export default mergedThemes;
