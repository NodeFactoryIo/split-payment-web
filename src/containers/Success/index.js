import React from "react";
import {SmallHeader} from "../../components/SmallHeader";
import {HOME} from "../../routes";

export class SplitSuccess extends React.Component {

    constructor(props) {
        super(props);
    }

    proceed = () => {
        this.goHome()
    };

    goHome = () => {
        this.props.history.replace(HOME);
    };

    render() {
        return (
            <div>
                <SmallHeader title="Success" goHome={this.goHome}/>

                <div className="container success-screen">
                    <img className="success-image" src={require('../../assets/img/correct.png')}/>
                    <p className="description">
                        Your contacts have been notified about outstanding payment
                    </p>
                    <button className="proceed round-container" onClick={this.proceed}>Proceed</button>
                </div>
            </div>
        )
    }
}