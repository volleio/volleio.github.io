import React, { Component, MouseEvent, TransitionEvent } from 'react';
//@ts-ignore
import * as basicScroll from 'basicscroll';
import BusinessCard from './BusinessCard';
import Toggle from './Toggle';
import { isMobile } from 'react-device-detect';
import '../global.scss';

class Header extends Component<IHeaderProps, IHeaderState>
{
	constructor(props: IHeaderProps) {
		super(props);

		this.state = {
			showAR: false,
			showMenu: false,
		};

		this.onClickAR.bind(this);
		this.toggleShowMenu.bind(this);
	}

	public render() {
		let AR = null;
		if (this.state.showAR) {
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
				<div id="header-container" className="header-container" onMouseEnter={this.onMouseEnterContainer} onMouseLeave={this.onMouseLeaveContainer}>
					<BusinessCard onTransitionEnd={this.onTransitionEnd} onMouseLeaveContainer={this.onMouseLeaveContainer} />
					{/* <div className="header-dropdown-menu">
						<DropdownMenu showMenu={this.state.showMenu} toggleShowMenu={this.toggleShowMenu.bind(this)} items={
							[
								{
									title: 'Augmented Reality',
									onClick: this.onClickAR.bind(this),
								},
							]
						}></DropdownMenu>
					</div> */}
					<div className="dark-mode-toggle">
						<Toggle on={!this.props.darkMode} onToggle={this.props.onDarkModeToggle} 
							onButtonImage="/static/images/sun.svg?sprite" offButtonImage="/static/images/moon.svg?sprite" />
					</div>
				</div>
				<div className="header-scroll"></div>
				{/* {AR} */}
				<style jsx>{`
					.header-container {
						position: fixed;
						width: 100%;
						height: calc(var(--header-height-out) * 100%);
						min-height: 80px;
						display: flex;
						justify-content: center;
						overflow: hidden;
						transform: translateZ(1px);
						z-index: 99;

						box-shadow: 0 0 10px rgba(0, 0, 0, calc((var(--header-height-in) - 0.9) * 2));
					}
					@supports (backdrop-filter: blur(15px) grayscale(50%)) {
						.header-container {
							backdrop-filter: blur(15px) grayscale(50%);
						}
					}

					.header-scroll {
						width: 100%;
						height: 100vh;
						min-height: 280px;
					}

					.header-dropdown-menu {
						position: fixed;
						top: 0;
						right: 0;
						margin: 20px;
					}

					.dark-mode-toggle {
						position: fixed;
						top: 0;
						right: 0;
						margin: 28px 20px;
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

	public componentDidMount() {
		this.SetupBasicScroll();

		// Disable AR auto-forward until it's better set up
		// const currentUrl = new URL(window.location.href);
		// if (currentUrl.searchParams.get('ar') != null)
		// 	this.setState({ showAR: true });
	}

	private onMouseEnterContainer(evt: MouseEvent) {
		if (isMobile)
			return;

		if (parseFloat(document.documentElement.style.getPropertyValue('--header-height-out')) !== 0)
			return;

		const headerContainer = evt.currentTarget as HTMLElement;
		const businessCardContainer = headerContainer.querySelector('.business-card-container') as HTMLElement;
		const businessCardSizer = businessCardContainer.querySelector('.business-card-sizer') as HTMLElement;

		headerContainer.style.setProperty('--header-height-out', '0.2');
		headerContainer.style.setProperty('--header-height-in', '0.8');
		headerContainer.style.setProperty('--header-fade-out', '1');
		headerContainer.style.setProperty('--header-fade-in', '0');

		businessCardContainer.style.marginTop = '0px';
		businessCardContainer.style.transition = 'transform 0.1s ease-in-out, margin-top 0.1s ease-in-out';
		businessCardContainer.style.marginTop = '40px';
		businessCardContainer.style.backgroundColor = '#FFF';

		headerContainer.style.height = '0';
		headerContainer.style.overflow = 'visible';

		businessCardContainer.style.width = `${headerContainer.offsetWidth * 2}px`;
		businessCardSizer.style.width = `${headerContainer.offsetWidth * 2}px`;
	}

	private onMouseLeaveContainer(evt: MouseEvent | { currentTarget: HTMLElement }) {
		const headerContainer = evt.currentTarget as HTMLElement;
		if (isMobile)
			return;

		const businessCardContainer = headerContainer.querySelector('.business-card-container') as HTMLElement;
		const businessCardSizer = businessCardContainer.querySelector('.business-card-sizer') as HTMLElement;

		headerContainer.style.setProperty('--header-height-out', '');
		headerContainer.style.setProperty('--header-height-in', '');
		headerContainer.style.setProperty('--header-fade-out', '');
		headerContainer.style.setProperty('--header-fade-in', '');

		businessCardContainer.style.transition = 'transform 0.1s ease-in-out, margin-top 0.1s ease-in-out';
		if (businessCardContainer.style.marginTop !== '')
			businessCardContainer.style.marginTop = '0px';
		headerContainer.style.height = '';
		headerContainer.style.overflow = '';
		businessCardContainer.style.backgroundColor = '';

		businessCardContainer.style.width = '';
		businessCardSizer.style.width = '';
	}

	private onTransitionEnd(evt: TransitionEvent) {
		const currentTarget = evt.currentTarget as HTMLElement;
		currentTarget.style.transition = '';
		if (currentTarget.style.marginTop === '0px')
			currentTarget.style.marginTop = '';
	}

	private onClickAR(evt: MouseEvent): void {
		this.setState({
			showAR: !this.state.showAR,
			showMenu: false,
		});
	}

	private toggleShowMenu() {
		this.setState({ showMenu: !this.state.showMenu });
	}

	private SetupBasicScroll() {
		const headerHeight = basicScroll.create({
			from: '0vh',
			to: '200vh',
			inside: () => (document.getElementById('header-container') as any).style.backdropFilter = 'none',
			outside: () => (document.getElementById('header-container') as any).style.backdropFilter = '',
			props: {
				'--header-height-out': {
					from: '1',
					to: '0',
				},
				'--header-height-in': {
					from: '0',
					to: '1',
				},
			},
		});

		const headerFade = basicScroll.create({
			from: '100vh',
			to: '150vh',
			props: {
				'--header-fade-out': {
					from: '1',
					to: '0',
				},
				'--header-fade-in': {
					from: '0',
					to: '1',
				},
			},
		});

		headerHeight.start();
		headerFade.start();
	}
}

interface IHeaderProps {
	onDarkModeToggle: (on: boolean) => void;
	darkMode: boolean;
}

interface IHeaderState {
	showAR: boolean;
	showMenu: boolean;
}

export default Header;
