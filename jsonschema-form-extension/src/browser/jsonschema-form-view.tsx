import * as React from "react";

export interface Greeting {
    name: string
    location: string
}
export class GreetingView extends React.Component<Greeting> {
    render(): JSX.Element {
        return <h1>Hello {this.props.name} at {this.props.location}!</h1>;
    }
}

export class JsonschemaFormView extends React.Component<{}, Greeting> {

    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'World',
            location: 'EclipseCon France 2018'
        }
    }

    render(): JSX.Element {
        return <React.Fragment>
            <GreetingView name={this.state.name} location={this.state.location} />
            Greet <input value={this.state.name} onChange={this.updateName} />
            at <input value={this.state.location} onChange={this.updateLocation} />
        </React.Fragment>;
    }

    protected updateName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        name: e.currentTarget.value
    });

    protected updateLocation = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        location: e.currentTarget.value
    });
}

