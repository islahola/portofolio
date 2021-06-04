import React from 'react'
import Home from '../view/home/Home'
import Skill from '../view/home/Skill'
import {Route,Switch} from 'react-router-dom'
import Portofolio from '../view/home/Portofolio./Portofolio'
import About from '../view/About'
import Start from '../view/Start'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Start} />
                <Route path="cv" exact component="https://www.canva.com/design/DAEXuJV8gZI/8uzNV_WdtP7436AdY5EtQw/view?utm_content=DAEXuJV8gZI&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"/>
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About}/>
                <Route path="/skills" exact component={Skill}/>
                <Route path="/portofolio" exact component={Portofolio}/>
            {/* <Route path="/detail/:id" exact component={Detail}/> */}
            {/* <Route component={NotFound}/> */}
            </Switch>
        </div>
    )
}

export default Router
