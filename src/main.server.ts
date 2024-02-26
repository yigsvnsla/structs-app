import { bootstrapApplication } from '@angular/platform-browser';
import { AppPage } from './app/pages/app.page';
import { config } from './app/app.config.server';

// global['MutationObserver'] = getMockMutationObserver();

// function getMockMutationObserver() {
//   return class {
//     observe(node: any, options: any) {}
//     disconnect() {}
//     takeRecords() {
//       return [];
//     }
//   };
// }

const bootstrap = () => bootstrapApplication(AppPage, config);

export default bootstrap;
