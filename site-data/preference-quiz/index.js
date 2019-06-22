// TODO: import this debugger from starforge/debug
import dynamicImportAll from 'starforge/import-helper';
import _debug from 'starforge/debug';
import siteData from './site-data';
import theme from './theme';

// DO NOT ALTER THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING

const debug = _debug.extend(`ce-templates:site-data-index`);

window.SITE_DATA = siteData;
window.THEME = theme;
// Typically we would "import image from './some.jpg'"
// however we can't do that, we want these images to be relative to the public directory
// so that we don't have to hardcode imports.  In order to do this we need to use some
// advanced webpack features, i.e., require.context.
// I suggest you read alot of the webpack docks on dynamic imports.  It took me a week
// to figure this out.  Webpack creates a intermediary context module for these.
// https://survivejs.com/webpack/techniques/dynamic-loading/
window.DYNAMIC_IMAGE_MAP = dynamicImportAll(require.context('./images', false));

debug('GENERATED SITE DATA ENTRY POINT - %0', {
  SITE_DATA: window.SITE_DATA,
  THEME: window.THEME,
  DYNAMIC_IMAGE_MAP: window.DYNAMIC_IMAGE_MAP
});
