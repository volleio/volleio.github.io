import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColourPicker from "./colourpicker";
import "../static/colourpicker.css";

class ColorPicker extends Component 
{
	constructor(props) 
	{
		super(props);
	}

	componentDidMount()
	{
		const colorPickerElement = ReactDOM.findDOMNode(this).querySelector(".color-picker");
		const colourPicker = new ColourPicker(colorPickerElement, (rgba) => 
			{
				document.body.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;
			});
  	}

	render()
	{
		return (
			<div className="color-picker-container">
				<div className="color-picker-border">
					<div className="color-picker-indicator"></div>
				</div>
				<div className="color-picker"></div>
				<style jsx>
				{`
					.color-picker-border {
						width: 16px;
						height: 16px;
						border: 1px solid #323232;
						border-radius: 4px;
						padding: 4px;
					}
					.color-picker-indicator {
						background-color: white;
						border-radius: 2px;
					}

					.color-picker {
						position: absolute;
						bottom: 48px;
						transform: translateX(calc(-50% + 16px));
					}
				`}
				</style>
			</div>
		);
  	}
}

export default ColorPicker;