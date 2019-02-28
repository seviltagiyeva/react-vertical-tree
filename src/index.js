import WebFont from 'webfontloader';
import Tree from './components/tree/Tree';
import { withStyles } from './utils';

export default Tree;
export { withStyles };


WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif'],
  },
});
