import * as serviceWorker from './serviceWorker';
import state, {addPost} from "./state";
import renderEntireTree from "./render";

renderEntireTree(state,addPost);

serviceWorker.unregister();
