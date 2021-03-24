import light from './palettes/light.json';
import dark from './palettes/dark.json';

const theme = {
    light,
    dark
};

const GenerateColors = (themeName) => {
    let result = {
    };
    if(themeName) {
        const palette = theme[themeName];
        result.constrastBody = palette.gray98;
        result.buttonText = palette.gray98;
        result.seperator = palette.gray80;
        result.hideText = palette.gray60;
        result.primary = palette.primary;
        result.warning = palette.warning;
        result.success = palette.success;
        result.danger = palette.danger;
        result.layer1 = palette.layer1;
        result.layer2 = palette.layer2;
        result.layer3 = palette.layer3;
        result.accent = palette.accent;
        result.body = palette.gray10;
     
    }
    return result;
};

export default GenerateColors;