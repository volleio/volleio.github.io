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
					.color-picker-container {
						position: relative;
					}

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
