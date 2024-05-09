import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "../components/Home";
import {Portfolio} from "../components/Portfolio";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {NoMatch} from "../components/NoMatch";

export const MainContent=()=>{
    return (
        <main className="w-full pt-20  h-full">
            <Switch>
                <Route exact path="/josef256_cv/">
                    <Home />
                </Route>
                <Route path="/josef256_cv/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/josef256_cv/about">
                    <About />
                </Route>
                <Route path="/josef256_cv/contact">
                    <Contact />
                </Route>
                <Route path="*">
                <Home />
                </Route>
            </Switch>
        </main>
    )
}
