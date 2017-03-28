/**
 * Created by MedRist on 3/24/2017.
 */


import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';


import {
  Router,
    Scene,
} from 'react-native-router-flux';

class App extends React.Component{
    render()
    {
        return (
            <Router>
                <Scene key="root"  style={{paddingTop:64}}>
                    <Scene key='home' component={Home} title="Home"></Scene>
                    <Scene key='chat' component={Chat} title="Chat"></Scene>
                </Scene>
            </Router>
        );
    }

}

export default App;