import React, { Component } from 'react'
import InputForm from './Components/InputForm'
import Navbar from './Components/Navbar.js';
import Footer from './Components/footer.js';

export class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <InputForm />
                <Footer />
            </div>
        )
    }
}

export default App
