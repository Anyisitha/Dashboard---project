import { BrowserRouter, Routes } from 'react-router-dom';
import useAnonymousRoutes from './anonymous';
import {map} from 'lodash'

const useRoutes = () => {
    // Union de rutas (privadas,publicas - anonymous)
    const anonymousRoutes = useAnonymousRoutes();
    const resultRoutes = [...anonymousRoutes];

    return (
        <BrowserRouter>
            <Routes>
                {map(resultRoutes)}
            </Routes>
        </BrowserRouter>
    )
}

export default useRoutes;
