import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
// const sharedLibraries: string[] = ['@micro-frontend/auth'];
export default withModuleFederation(
  {
    ...config,
    // shared: (name, config) => {
    // //   console.log('name', name);
    //   if (sharedLibraries.includes(name)) {
    //     return {
    //       singleton: true,
    //       strictVersion: true,
    //       requiredVersion: 'auto',
    //     };
    //   }
    //   return config
    // },
  },
  { dts: false }
);
