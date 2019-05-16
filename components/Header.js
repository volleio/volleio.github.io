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
            <div className="header-container">
                <BusinessCard />
                <style jsx>{`
                    .header-container {
                        position: relative;
                        width: 100%;
                        height: 100vh;
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