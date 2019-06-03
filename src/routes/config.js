import { HomePage } from '../components/page';
import {FormComponent} from '../components/shared'
export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
        key: 'home'
    },
    {
        path: '/form',
        exact: true,
        component: FormComponent,
        key: 'form'
    },
]