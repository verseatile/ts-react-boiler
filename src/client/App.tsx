import * as React from "react"
import Test from "./Test"

export interface HelloProps { compiler: string; framework: string; }

// export const App = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export class App extends React.Component<HelloProps, {}> {
    render() {
        return(
            <div>
                <Test />
                <h1>Hello from {this.props.compiler}! with {this.props.framework}.</h1>
            </div> );
    }
}