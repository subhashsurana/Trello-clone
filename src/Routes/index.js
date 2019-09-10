import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import TrelloBoard from '../components/TrelloBoard';
import Home from '../components/Home';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/:boardID" component={TrelloBoard} />
            </div>
        </Router>
    );
};

export default AppRouter;

