import * as serviceWorker from './serviceWorker';
import state, {addPost, postChanged} from "./state";
import renderEntireTree from "./render";

renderEntireTree(state,addPost, postChanged);

serviceWorker.unregister();
