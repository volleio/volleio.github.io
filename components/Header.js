import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as basicScroll from 'basicscroll';
import BusinessCard from './BusinessCard';

class Header extends Component
{
    constructor(props){
        super(props);
    }

    render() 
    {
        return (
            <div className="header">
                <div className="header-container">
                    <BusinessCard />
                </div>
                <div className="header-scroll"></div>
                <style jsx>{`
                    .header-container {
                        position: fixed;
                        width: 100%;
                        height: calc(var(--header-height) * 100vh);
                        min-height: 120px;
                        display: flex;

                        background-color: #FFF;
                    }

                    .header-scroll {
                        width: 100%;
                        height: calc(var(--header-height) * 100vh);
                        min-height: 160px;
                    }
                `}</style>
            </div>
        )
    }
    
    SetupBasicScroll()
    {
        const instance = basicScroll.create({
            //elem: ReactDOM.findDOMNode(this),
            from: '0vh',
            to: '100vh',
            props: {
                '--header-height': {
                    from: "1",
                    to: "0"
                }
            }
        });
        
        instance.start();
    }
    
    componentDidMount()
    {
        this.SetupBasicScroll();
    }
}

export default Header;