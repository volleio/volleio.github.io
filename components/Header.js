import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as basicScroll from 'basicscroll';

class Header extends Component
{
    constructor(props){
        super(props);
    }

    render() 
    {
        return (
            <div className="header-container">
                <div className="business-card"></div>
                <div className="business-card-text"></div>
                <style jsx>{`
                    .header-container {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }
                    .business-card {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        max-width: 90vw;
                        max-height: 30vh;
                        background-image: url("/static/business-card.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                `}</style>
            </div>
        )
    }
    
    SetupBasicScroll()
    {
        const instance = basicScroll.create({
            elem: ReactDOM.findDOMNode(this),
            from: 'top-top',
            to: 'bottom-middle',
            props: {
                '--header-position': {
                    from: 1,
                    to: 0
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