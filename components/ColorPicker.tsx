import React, { Component, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { ColourPicker, Colour } from './colourpicker';
import '../static/colourpicker.css';

class ColorPicker extends Component {
	private colourPicker!: ColourPicker;

	private indicator!: HTMLElement;
	private supportsBackdropBlur = false;

	constructor(props: IColorPickerProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render() {
		return (
			<div className="color-picker-container no-invert">
				<div className="color-picker-border" onClick={this.onClick}>
					<div className="color-picker-indicator"></div>
				</div>
				<div className="color-picker"></div>
				<style jsx>
					{`
					.color-picker-border {
						border: 1px solid #AAA;
						border-radius: 4px;
						padding: 4px;
						background-color: #FFF;

						cursor: pointer;
					}
					.color-picker-container.active .color-picker-border {
						border: 1px solid #323232;
					}

					.color-picker-indicator {
						width: 16px;
						height: 16px;
						background-color: #FFF;
						border: 1px solid #AAA;
						border-radius: 2px;
					}

					.color-picker {
						display: none;
						position: absolute;
						bottom: 48px;
						transform: translateX(calc(-50% + 16px));
					}
					.color-picker-container.active .color-picker {
						display: block;
					}
				`}
				</style>
			</div>
		);
	}

	public componentDidMount() {
		const container = ReactDOM.findDOMNode(this) as HTMLElement;
		const pickerElement = container.querySelector('.color-picker') as HTMLElement;

		this.indicator = container.querySelector('.color-picker-indicator') as HTMLElement;
		this.supportsBackdropBlur = CSS.supports('backdrop-filter', 'blur(10px) grayscale(50%)');
		this.colourPicker = new ColourPicker(pickerElement, color => this.UpdateThemeColor(color));

		// Set initial theme by checking local storage, or prefers-color-scheme. Add event listener on prefers-color-scheme.
		// addEventListener on matchMedia " is only partial in Safari (Desktop and iOS) including Safari 13 (Technology Preview), 
		// because the MediaQueryList object that is returned only supports the legacy .addListener() method, but not .addEventListener()."
		(matchMedia('(prefers-color-scheme: dark)').addEventListener || 
		matchMedia('(prefers-color-scheme: dark)').addListener)('change', (evt) => {
			let newColorScheme = '#FFF';
			if (evt.matches)
				newColorScheme = '#000';
				
			this.UpdateThemeColor(new Colour(newColorScheme));
		});

		const savedTheme = localStorage.getItem('theme-color');
		if (savedTheme) {
			const themeColor = new Colour(savedTheme);
			this.UpdateThemeColor(themeColor);
			this.colourPicker.SetColour(themeColor);
		}
		// else if (matchMedia('(prefers-color-scheme: dark)').matches)
		// 	this.UpdateThemeColor(new Colour('#000'));

	}

	private UpdateThemeColor(color: Colour) {
		const rgba = color.GetRGBA();
		document.body.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;
		this.indicator.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;

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

	private onClick() {
		const container = ReactDOM.findDOMNode(this) as HTMLElement;

		// Hide color picker on click outside
		const onBodyClick = (evt: globalThis.MouseEvent) => {
			if ((evt.target as HTMLElement).closest('.color-picker'))
				return;

			// Save theme
			localStorage.setItem('theme-color', this.colourPicker.GetColour().GetHex());

			document.body.removeEventListener('click', onBodyClick);
			container.classList.remove('active');
		};
		document.body.addEventListener('click', onBodyClick);

		// Show color picker
		container.classList.add('active');
	}
}

interface IColorPickerProps {

}

export default ColorPicker;
