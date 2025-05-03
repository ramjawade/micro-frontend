import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
// "bootstrap": "^5.3.3",
//     "bootstrap-icons": "^1.11.3",
// const sharedLibraries: string[] = [];
export default withModuleFederation(
  {
    ...config,
    // If you don't want to share libraries add to the shared array
    // By not declaring shared function all dependencies will be shared.
    // shared: (name) => {
    //     if(sharedLibraries.includes(name)) {
    //         return false;
    //     }
    // },
  },
  { dts: false }
);
