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
                        height: calc(var(--header-height-out) * 100vh);
                        min-height: 80px;
                        display: flex;
                        justify-content: center;

                        background-color: #FFF;
                        box-shadow: 0 0 10px rgba(0, 0, 0, calc((var(--header-height-in) - 0.9) * 2))
                    }

                    .header-scroll {
                        width: 100%;
                        height: calc(var(--header-height-out) * 100vh + 300px);
                        min-height: 400px;
                    }
                `}</style>
            </div>
        )
    }
    
    SetupBasicScroll()
    {
        const headerHeight = basicScroll.create({
            from: '0vh',
            to: '200vh',
            props: {
                '--header-height-out': {
                    from: "1",
                    to: "0"
                },
                '--header-height-in': {
                    from: "0",
                    to: "1"
                }
            }
        });
        
        const headerFade = basicScroll.create({
            from: '100vh',
            to: '150vh',
            props: {
                '--header-fade-out': {
                    from: "1",
                    to: "0"
                },
                '--header-fade-in': {
                    from: "0",
                    to: "1"
                }
            }
        });

        headerHeight.start();
        headerFade.start();
    }
    
    componentDidMount()
    {
        this.SetupBasicScroll();
    }
}

export default Header;