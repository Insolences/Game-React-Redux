import React from "react";

export class Content extends React.Component {

    componentDidMount() {
        this.props.isInitEvent()
    }

    render() {
        return (
            <>
                <h1>Its Content</h1>
                <Content/>
            </>
        );
    }
}
