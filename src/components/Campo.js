import React from "react";

class Campo extends React.Component {


    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input name={this.props.name} type={this.props.type} />
            </div>
        )
    }
}

export default Campo