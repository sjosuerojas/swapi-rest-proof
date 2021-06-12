import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from '../components/shared/Layout'
import { SwapiContainer } from '../components/swapi/SwapiContainer'
import { UsersContainer } from '../components/users/UsersContainer'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={UsersContainer} />
                    <Route exact path="/swapi" component={SwapiContainer} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
