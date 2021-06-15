import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { startCheckingLiveness } from '../actions/uiActions'
import { Layout } from '../components/shared/Layout'
import { SwapiContainer } from '../components/swapi/SwapiContainer'
import { UsersContainer } from '../components/users/UsersContainer'

export const AppRouter = () => {
    const dispatch = useDispatch()
    const { checking, error } = useSelector((state) => state.ui)

    useEffect(() => {
        dispatch(startCheckingLiveness())
    }, [dispatch])

    if (checking) {
        return (
            <div className="container-loader">
                <div className="loader">Loading...</div>
            </div>
        )
    }

    if (error) {
        return <h3 className="text-center">Lo sentimos, no hay un servidor establecido</h3>
    }

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
