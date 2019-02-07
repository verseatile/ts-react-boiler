import * as React from "react"
import Test from "./Test"
import Nav from "./Nav"
import { ThemeProvider } from "styled-components";
import { init } from '../style-guide/theme'

export interface HelloProps { compiler: string; framework: string; }

// export const App = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export class App extends React.Component<HelloProps, {}> {
    render() {
        return(
            <ThemeProvider theme={init}>
                <div>
                    <Nav />
                    <Test />
                    <h1>Hello from {this.props.compiler}! with {this.props.framework}.</h1>
                </div> 
            </ThemeProvider>);
    }
}