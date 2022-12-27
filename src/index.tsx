import {Route, Router, Routes} from '@solidjs/router';
import {render} from 'solid-js/web';
import Home from "./pages/home/Home";
import Bee from './projects/bee/Bee';
import Blink from './projects/blink/Blink';
import Red from "./projects/red/Red";
import Eye from "./projects/eye/Eye";

render(() => (
        <Router>
            <Routes>
                <Route path="/" component={Home}/>
                <Route path="/red" component={Red}/>
                <Route path="/bee" component={Bee}/>
                <Route path="/blink" component={Blink}/>
                <Route path="/eye" component={Eye}/>
            </Routes>
        </Router>
    ),
    document.getElementById('root') as HTMLElement
);
