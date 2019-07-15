import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ColourPicker, Colour } from "./colourpicker";
import "../static/colourpicker.css";

class ColorPicker extends Component 
{
	constructor(props) 
	{
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	componentDidMount()
	{
		const container = ReactDOM.findDOMNode(this);
		const pickerElement = container.querySelector(".color-picker");
		const indicator = container.querySelector(".color-picker-indicator");

		const colourPicker = new ColourPicker(pickerElement, (rgba) => 
		{
			document.body.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;
			indicator.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;			

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
	  
	onClick()
	{
		const container = ReactDOM.findDOMNode(this);

		// Hide color picker on click outside
		const onBodyClick = (evt) =>
		{
			if (evt.target.closest(".color-picker"))
				return;

			document.body.removeEventListener("click", onBodyClick);
			container.classList.remove("active");				
		};
		document.body.addEventListener("click", onBodyClick);

		// Show color picker
		container.classList.add("active");
	}

	render()
	{
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
}

export default ColorPicker;