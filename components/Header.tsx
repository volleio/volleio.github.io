import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as basicScroll from 'basicscroll';
import BusinessCard from './BusinessCard';
import DropdownMenu from './DropdownMenu';
import "../global.scss"

class Header extends Component<IHeaderProps, IHeaderState>
{
    constructor(props)
    {
		super(props);

		this.state = { 
			showAR: false,
			showMenu: false
		};
		
		this.onClickAR.bind(this);
		this.toggleShowMenu.bind(this);
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
	
	onClickAR(evt: MouseEvent): void
	{
		this.setState({ 
			showAR: !this.state.showAR,
			showMenu: false
		});
	}

	toggleShowMenu()
	{
		this.setState({ showMenu: !this.state.showMenu });
	}

	componentDidMount()
	{
        this.SetupBasicScroll();

		// Disable AR auto-forward until it's better set up
		// const currentUrl = new URL(window.location.href);
		// if (currentUrl.searchParams.get("ar") != null)
		// 	this.setState({ showAR: true });
	}

    render() 
    {
		let AR = null;
		if (this.state.showAR)
		{
			AR = (
				<div className="ar-overlay">
					<div className="spinner spinner--viewport">
						<div className="spinner__line"></div>
						<div className="spinner__line"></div>
					</div>
					<iframe id="ar-iframe" src="/static/AR/ar.html"></iframe>
					<div className="close-button" onClick={() => this.setState({ showAR: false })}>
						<div className="close-button__line close-button__line1"></div>
						<div className="close-button__line close-button__line2"></div>
					</div>
					<style jsx>
					{`
						.spinner {
							z-index: -1;
						}

						.ar-overlay {
							position: fixed;
							width: 100%;
							height: 100%;
							top: 0;
							left: 0;
							background-color: #FFF;
							z-index: 100;
						}

						#ar-iframe {
							width: 100%;
							height: 100%;
						}

						.close-button {					
							position: absolute;
							width: 40px;
							height: 40px;
							right: 0;
							top: 0;
							margin: 8px;
							border-radius: 3px;
							background-color: rgba(255, 255, 255, 1);
							transition: all 0.1s ease-in-out;
							cursor: pointer;
						}

						.close-button__line {
							position: absolute;
							height: 2px;
							width: 30px;
							left: calc(50% - 15px);
							top: calc(50% - 1px);
							background-color: #323232;
							border-radius: 2px;
						}

						.close-button__line1 {
							transform: rotateZ(45deg);
						}

						.close-button__line2 {
							transform: rotateZ(-45deg);
						}
					`}
					</style>
                    <style jsx global>
                    {`
                        body {
                            overflow: hidden;
                            position: fixed;
                        }
                    `}
                    </style>
				</div>
			);
		}

        return (
            <div className="header">
                <div className="header-container" onMouseEnter={this.onMouseEnterContainer} onMouseLeave={this.onMouseLeaveContainer}>
                    <BusinessCard onTransitionEnd={this.onTransitionEnd} onMouseLeaveContainer={this.onMouseLeaveContainer} />
                    <div className="header-dropdown-menu">
                        <DropdownMenu showMenu={this.state.showMenu} toggleShowMenu={this.toggleShowMenu.bind(this)} items={
							[
								{
									title: "Augmented Reality",
									onClick: this.onClickAR.bind(this),
								}
							]
						}></DropdownMenu>
                    </div>
                </div>
                <div className="header-scroll"></div>
				{AR}
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

                    .header-dropdown-menu {
                        position: fixed;
                        top: 0;
                        right: 0;
                        margin: 20px;
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
        );
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
}

interface IHeaderProps {
	
}

interface IHeaderState {
	showAR: boolean;
	showMenu: boolean;
}

export default Header;