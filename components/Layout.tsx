import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';
import { Colour } from './colourpicker';

class Layout extends Component {
	private supportsBackdropBlur = false;

	constructor(props: ILayoutProps) {
		super(props);
	}

	public render() {
		return (
			<div className="layout">
				<Header />
				{this.props.children}
				<Footer updateLayoutTheme={this.UpdateThemeColor} />
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

					h2 {
						margin-top: 0.2em;
						margin-bottom: 0.2em;
						text-align: center;
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

		if ((window as any).portalHost) {
			document.body.style.overflow = 'hidden';
			
			window.addEventListener('portalactivate', (evt) => {
				document.body.style.overflow = '';
			});

			(window as any).portalHost.addEventListener('message', (evt: MessageEvent) => {
				const data = evt.data;
				if (evt.data.themeColor)
					this.UpdateThemeColor(new Colour(evt.data.themeColor));
			});
		}

		this.supportsBackdropBlur = CSS.supports('backdrop-filter', 'blur(10px) grayscale(50%)');
	}

	private UpdateThemeColor(color: Colour) {
		const rgba = color.GetRGBA();
		document.body.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;

		const whiteTintHsl = color.GetHSL();
		if (whiteTintHsl.L < 0.3)
			document.documentElement.classList.add('dark-mode');
		else
			document.documentElement.classList.remove('dark-mode');

		whiteTintHsl.S = Math.min(whiteTintHsl.S, whiteTintHsl.L);
		whiteTintHsl.L = 0.9 + whiteTintHsl.L / 10;
		const whiteTintColor = new Colour(whiteTintHsl);
		whiteTintColor.SetAlpha(this.supportsBackdropBlur ? 88 : 98);

		(document.querySelector('.header-container') as HTMLElement).style.backgroundColor = whiteTintColor.ToCssString(true);
	}
}

interface ILayoutProps {
	children: any;
}

export default Layout;
