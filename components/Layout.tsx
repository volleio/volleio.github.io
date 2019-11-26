import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';

class Layout extends Component {
	constructor(props: ILayoutProps) {
		super(props);
	}

	public render() {
		return (
			<div className="layout">
				<Header />
				{this.props.children}
				<Footer />
				<style jsx>
				{`
					@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
					.layout {
						font-family: 'Source Sans Pro', Arial, sans-serif;
						color: #323232;
						min-height: 100%;
						background: linear-gradient(0deg,#b3b3b312,transparent);
					}
				`}
				</style>
				<style jsx global>
				{`
					*,
					*:before,
					*:after {
						box-sizing: border-box;
					}

					html {
						font-size: 100%;
					}
					html.dark-mode {
						filter: invert(1);
					}

					body {
						margin: 0;
					}

					h1 {
						margin-block-start: 0.33em;
						margin-block-end: 0.33em;
					}

					p {
						text-indent: 2em;
						margin-block-start: 0.33em;
						margin-block-end: 0.33em;
					}

					a:link {
						text-decoration: none;
					}
					a:visited {
						text-decoration: none;
					}
					a:hover {
						text-decoration: underline;
					}
					a:active {
						text-decoration: underline;
					}
					html.dark-mode a {
						filter: invert(1);
						color: lightskyblue;
					}

					html.dark-mode .no-invert {
						filter: invert(1);
					}

					{/* Element specific dark-mode overrides */}
					html.dark-mode .header-container {
						box-shadow: 0 0 10px rgba(255,255,255,calc((var(--header-height-in) - 0.9) * 2));
					}
					html.dark-mode .business-card-container {
						background-color: rgba(150, 150, 150, calc(var(--header-fade-out) / 2 - 0.3));
						box-shadow: 0 0 0 2px rgba(50, 50, 50, calc(var(--header-fade-out) / 2 - 0.3));
					}
					html.dark-mode .welcome-card p {
						filter: invert(1);
					}
					html.dark-mode .card-container {
						background-color: #151515;
						box-shadow: 0 0 0 1px #323232;
						filter: invert(1);
					}
				`}
				</style>
			</div>
		);
	}

	public componentDidMount() {
		if (isMobile)
			(ReactDOM.findDOMNode(this) as HTMLElement).classList.add('is-mobile');
	}
}

interface ILayoutProps {
	children: any;
}

export default Layout;
