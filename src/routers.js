import React from 'react'

const Home = React.lazy(() => {
    return new Promise((resolve => {
        setTimeout(() => resolve(import("./Tix/Home")), 3000)
    }));
});

const routerHome = [
    {
        path: "/",
        exact: true,
        component: Home,
    }
]


export { routerHome };