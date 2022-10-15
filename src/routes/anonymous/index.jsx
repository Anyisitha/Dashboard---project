import useViews from "../../views";
import {map} from 'lodash';
import {Route} from 'react-router-dom';

const useAnonymousRoutes = () => {
    //vistas
    const {useScreens} = useViews();
    const {Login} = useScreens();

    const routes = [
        {
            path: '/login',
            exact: false,
            Component: Login
        }
    ];

    return map(routes, (item, key) => {
        let Component = item.Component
        return (
            <Route 
                path={item.path}
                key={key}
                index={item.exact}
                element={<Component />}
            />
        )
    });
} 

export default useAnonymousRoutes;