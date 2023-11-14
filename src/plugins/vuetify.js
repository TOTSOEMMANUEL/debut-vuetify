import '@fortawesome/fontawesome-free/css/all.css'; 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'fa' || 'md',
    },
        theme: {
            primary: '#9652ff',
            success: '#3cd1c2',
            info: '#ffaa2c',
            error: '#f83e70',
            dark: {
                background: '#000000' || '#f4f5f9'
            }
        }
    
});
