/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-preview-twslider', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-config-twslider', () => import('./config'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-twslider', () => import('./component'));

const Criteria = Shopware.Data.Criteria;
const criteria = new Criteria(1, 25);
criteria.addAssociation('cover');

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'twomoons-slider',
    label: 'TwoMoons Slider',
    component: 'sw-cms-el-twslider',
    configComponent: 'sw-cms-el-config-twslider',
    previewComponent: 'sw-cms-el-preview-twslider',
    defaultConfig: {
        products: {
            source: 'static',
            value: [],
            required: true,
            entity: {
                name: 'product',
                criteria: criteria,
            },
        },
        title: {
            source: 'static',
            value: '',
        },
        desktopNoSlider: {
            source: 'static',
            value: false,
        },
        displayMode: {
            source: 'static',
            value: 'standard',
        },
        boxLayout: {
            source: 'static',
            value: 'standard',
        },
        navigation: {
            source: 'static',
            value: true,
        },
        navigationmobile: {
            source: 'static',
            value: false,
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
        productStreamSorting: {
            source: 'static',
            value: 'name:ASC',
        },
        productStreamLimit: {
            source: 'static',
            value: 10,
        },
    },
    collect: Shopware.Service('cmsService').getCollectFunction(),
});