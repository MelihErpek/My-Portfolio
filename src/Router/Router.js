import React from 'react'
import {
    BrowserRouter as RouterApp,
    Switch,
    Route
} from "react-router-dom";

import AboutMe from "../Components/AboutMe"
import Contact from "../Components/Contact"
import MySkills from "../Components/MySkills"
import Work from "../Components/Work"

export default function Router() {
    return (
        <div>
            <RouterApp>
                <Switch>
                    <Route path="/" exact component={AboutMe} />
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/myskills" component={MySkills} />
                    <Route path="/projects" component={Work} />
                </Switch>
            </RouterApp>


        </div>
    )
}
