import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnotherPage } from "./views/blackAndWhite/AnotherPage";
import { Contact } from "./views/blackAndWhite/Contact";
import { Example } from "./views/blackAndWhite/Example";
import { Header } from "./views/blackAndWhite/Header";
import { Home } from "./views/blackAndWhite/Home";
import { News } from "./views/blackAndWhite/News";
import { Page } from "./views/blackAndWhite/Page";
import search from "../src/assets/blackAndWhite/search.png";

export class BlackAndWhite extends React.Component{
    render(){
        return(
            <Router>
                <div id="main">
                    <Header />
                    <div id="site_content">
                    <div className="sidebar">
                        <News />
                        <h3>Useful Links</h3>
                        <ul>
                        <li><a href="#">link 1</a></li>
                        <li><a href="#">link 2</a></li>
                        <li><a href="#">link 3</a></li>
                        <li><a href="#">link 4</a></li>
                        </ul>
                        <h3>Search</h3>
                        <form method="post" action="#" id="search_form">
                        <p>
                            <input className="search" type="text" name="search_field" value="Enter keywords....." />
                            <input name="search" type="image" alt="Search" title="Search" src={search}/>
                        </p>
                        </form>
                    </div>
                    <div id="content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route> 
                            <Route exact path="/example">
                                <Example />
                            </Route>
                            <Route exact path="/page">
                                <Page />
                            </Route>
                            <Route exact path="/anotherPage">
                                <AnotherPage />
                            </Route>
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </div>
                    </div>
                    <div id="content_footer"></div>
                    <div id="footer">
                    Copyright &copy; black &amp; white | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.html5webtemplates.co.uk">HTML5 Web Templates</a>
                    </div>
                </div>
            </Router>
        )
    }
}