import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ColourPicker, Colour } from "./colourpicker";
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

				const whiteTintHsl = colourPicker.GetColour().GetHSL();
				if (whiteTintHsl.L < 0.3)
					document.documentElement.classList.add("dark-mode");
				else
					document.documentElement.classList.remove("dark-mode");

				whiteTintHsl.S = Math.min(whiteTintHsl.S, whiteTintHsl.L);
				whiteTintHsl.L = 0.9 + whiteTintHsl.L / 10;
				const whiteTintRgb = new Colour(whiteTintHsl);
				whiteTintRgb.A = 98;
				
				document.querySelector(".header-container").style.backgroundColor = whiteTintRgb.ToCssString(true);
			});
  	}

	render()
	{
		return (
			<div className="color-picker-container">
				<div className="color-picker-border">
					<div className="color-picker-indicator"></div>
				</div>
				<div className="color-picker no-invert"></div>
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