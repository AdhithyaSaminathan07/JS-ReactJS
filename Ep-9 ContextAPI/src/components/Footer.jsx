import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

class Footer extends React.Component {
    render(){
        // console.log(this.props)
        let data = new Date()

        return (
            <footer>
                <h2>Footer</h2>
                <UserContext.Consumer>
                    {
                        ({user})=>{
                            return(
                                <h1>{ user . uName } {data.getFullYear()}</h1>
                            )
                        }
                    }

                </UserContext.Consumer>
            </footer>
        )
    }

}

export default Footer;