import TwoMoonsSlider from './js/twomoonsslider';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;

PluginManager.register('AwesomeTwoMoonsSlider', TwoMoonsSlider, '.twomoons-slider');

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}