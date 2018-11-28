import React, {Component} from 'react';
import SideNav from "./navigation/SideNav";
import Card from './Card.component';
import './styles.css'

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <SideNav/>
                <div className='body-wrapper'>
                    <h1>Welcome to the React Native!</h1>
                    <div className="flex-row">
                        <Card
                            header="Hi Capco"
                            body={`Lorem Khaled Ipsum is a major key to success. Bless up. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile.`}
                        />
                        <Card header={'Card 2'} body={'Anotha one'}/>
                        <Card header={'Card 3'} body={'Anotha one'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;