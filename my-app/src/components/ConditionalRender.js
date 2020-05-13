import React, {Component} from 'react';

class CoditionalRender extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLoggedIn : true
        }

    }

    render() {
        let message;
        if(this.state.isLoggedIn) {
            message = <div> Welcome Abhishek!!!</div>
        } else {
            message = <div> Welcome Guest </div>
        }
        //if(this.state.isLoggedIn) {
        //    return (
        //        <div>
        //            <div>Welcome Abhishek !!!</div>
        //        </div>
        //    );
        //} else {
        //return (
        //    <div>
        //        <div>Welcome Guest!!!</div>
        //    </div>
        //);}
        return message;
    }
}

export default CoditionalRender;