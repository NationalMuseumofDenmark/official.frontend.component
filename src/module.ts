import { VueConstructor, PluginObject, PluginFunction } from 'vue';
import authentication, { IAuth0Options } from './builds/authentication';
import vuelidate from 'vuelidate';
import customBootstrap from './builds/customBootstrap';
import globalComponents from './builds/globalComponents';
import fontawesome from './builds/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const Vuelidate = vuelidate as unknown as PluginFunction<any>;

export interface INclOptions {
    auth?: IAuth0Options;
    globalBootstrap: boolean;
    globalComponents: boolean;
    globalFontAwesome: boolean;
}

const plugin: PluginObject<INclOptions> = {
    install(vue: VueConstructor, options: INclOptions | undefined): void {
        vue.config.productionTip = false;

        const defaults: INclOptions = {
            globalBootstrap: true,
            globalComponents: true,
            globalFontAwesome: true,
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

        if (finalOptions.globalFontAwesome) {
            vue.use(fontawesome);
            vue.component('font-awesome-icon', FontAwesomeIcon);
        }

        vue.use(Vuelidate);
    },
};

export default plugin;
