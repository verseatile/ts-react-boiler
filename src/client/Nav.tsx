import * as React from "react"
import styled from 'styled-components'

export default class Nav extends React.Component<{}, {}> {
    render() {
        return (
            <Contain>
                <Icon src="https://picsum.photos/45" alt="Logo" />
                {/* <Icon src="https://picsum.photos/45" alt="Logo" />
                <Icon src="https://picsum.photos/45" alt="Logo" /> */}
                <Icon src="https://picsum.photos/30" alt="Logo" />
                <Menu>
                    <NavItem>One</NavItem>
                    <NavItem>Two</NavItem>
                    <NavItem>Three</NavItem>
                </Menu>
            </Contain>
        )
    }
}

const Contain = styled.div`
    height: 50px;
    background: palevioletred;
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
    font-family: ${props => props.theme.main.fontFamily};
    /* padding: 0 20px; */
`

const Menu = styled.ul`
    /* display: inline; */
    /* display: flex; */
    /* width: 50%; */
`

const NavItem = styled.li`
    display: inline;
    padding: 0 10px;
    cursor: pointer;
    height: 25px;

    &:hover {
        background-color: #333333;
        color: #FFF;
    }
`

const Icon = styled.img`

`