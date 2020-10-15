import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DialogMarkdown from "../docs/Dialog.md";
import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";

// const Dialog = React.lazy(() => import("app_02/Dialog"));

// const DialogPage = () => (
//   <Page title="Dialog Demo">
//     <Markdown>{DialogMarkdown}</Markdown>
//     <React.Suspense fallback="Loading Dialog...">
//       <Dialog />
//     </React.Suspense>
//   </Page>
// );


const DialogPage = ()=>{


  if(!document.querySelector('#app2-script')){
    const parent = document.createElement('div');
    parent.id = 'app2';
    document.body.append(parent);
    const script = document.createElement('script');
    script.id = 'app2-script';
    script.src="app2/main.js"
    document.body.append(script);
  }

  return null;
};
export default DialogPage;
