import React, { Component, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { ColourPicker, Colour } from './colourpicker';
import '../static/colourpicker.css';

class ColorPicker extends Component<IColorPickerProps> {
	private colourPicker!: ColourPicker;

	private indicator!: HTMLElement;

	constructor(props: IColorPickerProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.UpdateThemeColor = this.UpdateThemeColor.bind(this);
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
		this.colourPicker = new ColourPicker(pickerElement, color => this.UpdateThemeColor(color));

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
		this.indicator.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;

		this.props.updateLayoutTheme(color);
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
	updateLayoutTheme: (color: Colour) => void;
}

export default ColorPicker;
