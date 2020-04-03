import { VueConstructor, PluginObject, PluginFunction } from 'vue';
import authentication, { IAuth0Options } from './builds/authentication';
import vuelidate from 'vuelidate';
import customBootstrap from './builds/customBootstrap';
import globalComponents from './builds/globalComponents';

const Vuelidate = vuelidate as unknown as PluginFunction<any>;

export interface INclOptions {
    auth?: IAuth0Options;
    globalBootstrap: boolean;
    globalComponents: boolean;
}

const plugin: PluginObject<INclOptions> = {
    install(vue: VueConstructor, options: INclOptions | undefined): void {
        vue.config.productionTip = false;

        const defaults: INclOptions = {
            globalBootstrap: true,
            globalComponents: true,
        };

        const finalOptions: INclOptions = { ...defaults, ...options };

        if (finalOptions.auth) {
            vue.use(authentication, finalOptions.auth);
        }

        if (finalOptions.globalBootstrap) {
            vue.use(customBootstrap);
        }

        if (finalOptions.globalComponents) {
            vue.use(globalComponents);
        }

        vue.use(Vuelidate);
    },
};

export default plugin;
