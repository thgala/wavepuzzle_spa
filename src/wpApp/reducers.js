import WP_Layout from './modules/layout';
import WP_Braintree from './modules/braintree';
import WP_Router from './modules/router';


export default {
  [WP_Layout.constants.MODULE_NAME]: WP_Layout.reducer,
  [WP_Braintree.constants.MODULE_NAME]: WP_Braintree.reducer,
  [WP_Router.constants.MODULE_NAME]: WP_Router.reducer,
}
