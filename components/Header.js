import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as basicScroll from 'basicscroll';
import BusinessCard from './BusinessCard';

class Header extends Component
{
    constructor(props)
    {
        super(props);
    }

    onMouseEnterContainer(evt)
    {
        if (parseFloat(document.documentElement.style.getPropertyValue("--header-height-out")) != 0)
            return;

        const headerContainer = evt.currentTarget;
        const businessCardContainer = headerContainer.querySelector(".business-card-container");
        const businessCardSizer = businessCardContainer.querySelector(".business-card-sizer");
        
        headerContainer.style.setProperty("--header-height-out", "0.2");
        headerContainer.style.setProperty("--header-height-in", "0.8");
        headerContainer.style.setProperty("--header-fade-out", "1");
        headerContainer.style.setProperty("--header-fade-in", "0");
        
        businessCardContainer.style.marginTop = "0px";
        businessCardContainer.style.transition = "transform 0.1s ease-in-out, margin-top 0.1s ease-in-out";
        businessCardContainer.offsetHeight;
        businessCardContainer.style.marginTop = "40px";

        headerContainer.style.height = "0";
        headerContainer.style.overflow = "visible";

        businessCardContainer.style.width = headerContainer.offsetWidth * 2 + "px";
        businessCardSizer.style.width = headerContainer.offsetWidth * 2 + "px";
    }

    onMouseLeaveContainer(evt)
    {
        const headerContainer = evt.currentTarget;        
        const businessCardContainer = headerContainer.querySelector(".business-card-container");
        const businessCardSizer = businessCardContainer.querySelector(".business-card-sizer");

        headerContainer.style.setProperty("--header-height-out", "");
        headerContainer.style.setProperty("--header-height-in", "");
        headerContainer.style.setProperty("--header-fade-out", "");
        headerContainer.style.setProperty("--header-fade-in", "");
        
        businessCardContainer.style.transition = "transform 0.1s ease-in-out, margin-top 0.1s ease-in-out";
        if (businessCardContainer.style.marginTop != "")
            businessCardContainer.style.marginTop = "0px";
        headerContainer.style.height = "";
        headerContainer.style.overflow = "";
        
        businessCardContainer.style.width = "";
        businessCardSizer.style.width = "";
    }

    onTransitionEnd(evt)
    {
        evt.currentTarget.style.transition = "";
        if (evt.currentTarget.style.marginTop == "0px")
            evt.currentTarget.style.marginTop = "";
    }

    render() 
    {
        return (
            <div className="header">
                <div className="header-container" onMouseEnter={this.onMouseEnterContainer} onMouseLeave={this.onMouseLeaveContainer}>
                    <BusinessCard onTransitionEnd={this.onTransitionEnd} onMouseLeaveContainer={this.onMouseLeaveContainer} />
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
                        overflow: hidden;

                        background-color: rgba(255, 255, 255, 0.98);
                        box-shadow: 0 0 10px rgba(0, 0, 0, calc((var(--header-height-in) - 0.9) * 2));
                    }

                    .header-scroll {
                        width: 100%;
                        height: calc(var(--header-height-out) * 100vh + 400px);
                        min-height: 280px;
                    }
                `}</style>
                <style jsx global>{`
                  html {
                    --header-height-out: 1;
                    --header-height-in: 0;
                    --header-fade-out: 1;
                    --header-fade-in: 0;
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