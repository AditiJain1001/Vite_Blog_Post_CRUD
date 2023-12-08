// declarations in this file are not being recognized despite including them to tsconfig
import { compose } from "redux";

    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }

    
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__?: () => any;
//   }
// }
