import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';
import { Colour } from './colourpicker';

class Layout extends Component<ILayoutProps, ILayoutState> {
	constructor(props: ILayoutProps) {
		super(props);

		this.state = {
			themeColor: new Colour('#FFF'),
			darkMode: false,
		};

		this.UpdateThemeColor = this.UpdateThemeColor.bind(this);
	}

	public render() {
		return (
			<div className="layout">
				<Header onDarkModeToggle={on => this.UpdateThemeColor(new Colour(on ? '#FFF' : '#000'))} darkMode={this.state.darkMode} />
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
					html.dark-mode .header-container {
						filter: invert(1);
					}
					html.dark-mode .main-content-column {
						filter: invert(1);
					}
					html.dark-mode .footer {
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
				if (evt.data.themeColor)
					this.UpdateThemeColor(new Colour(evt.data.themeColor));
			});
		}

		// Set initial theme by checking local storage, or prefers-color-scheme. Add event listener on prefers-color-scheme.
		// addEventListener on matchMedia " is only partial in Safari (Desktop and iOS) including Safari 13 (Technology Preview), 
		// because the MediaQueryList object that is returned only supports the legacy .addListener() method, but not .addEventListener()."
		const prefersDark = matchMedia('(prefers-color-scheme: dark)');
		const onColorSchemeChange = (evt: MediaQueryListEvent) => {
			let newColorScheme = '#FFF';
			if (evt.matches)
				newColorScheme = '#000';
				
			this.UpdateThemeColor(new Colour(newColorScheme));
		};

		if (prefersDark && prefersDark.addEventListener)
			prefersDark.addEventListener('change', onColorSchemeChange);
		else if (prefersDark && prefersDark.addListener)
			prefersDark.addListener(onColorSchemeChange);

		const savedTheme = localStorage.getItem('theme-color');
		if (savedTheme)
			this.UpdateThemeColor(new Colour(savedTheme));
		// else if (matchMedia('(prefers-color-scheme: dark)').matches)
		// 	this.UpdateThemeColor(new Colour('#000'));
	}

	private UpdateThemeColor(color: Colour) {
		this.setState(() => ({ themeColor: color }));

		const rgba = color.GetRGBA();
		document.body.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;

		const whiteTintHsl = color.GetHSL();
		if (whiteTintHsl.L < 0.3) {
			document.documentElement.classList.add('dark-mode');
			this.setState(() => ({ darkMode: true }));
		}
		else {
			document.documentElement.classList.remove('dark-mode');
			this.setState(() => ({ darkMode: false }));
		}

		whiteTintHsl.S = Math.min(whiteTintHsl.S, whiteTintHsl.L);
		whiteTintHsl.L = 0.9 + whiteTintHsl.L / 5;
		const whiteTintColor = new Colour(whiteTintHsl);
		const supportsBackdropBlur = CSS.supports('backdrop-filter', 'blur(10px) grayscale(50%)');
		whiteTintColor.SetAlpha(supportsBackdropBlur ? 86 : 96);

		(document.querySelector('.header-container') as HTMLElement).style.backgroundColor = whiteTintColor.ToCssString(true);

		// Save theme
		localStorage.setItem('theme-color', color.GetHex());

		if ('HTMLPortalElement' in window && !(window as any).portalHost) {
			// Update theme of any portals :)
			const portals = document.getElementsByTagName('portal');
			for (const portal of portals) {
				(portal as any).postMessage({ themeColor: color.GetHex() });
			}
		}
	}
}

interface ILayoutProps {
	children: any;
}

interface ILayoutState {
	themeColor: Colour;
	darkMode: boolean;
}

export default Layout;
