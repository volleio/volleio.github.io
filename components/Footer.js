import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColourPicker from "./colourpicker";
import "../static/colourpicker.css";

class Footer extends Component 
{
	constructor(props) 
	{
		super(props);
	}

	componentDidMount()
	{
		const colorPickerContainer = ReactDOM.findDOMNode(this).querySelector(".color-picker-container");
		const colourPicker = new ColourPicker(colorPickerContainer, (rgba) => 
			{
				document.body.style.backgroundColor = `rgb(${rgba.R}, ${rgba.G}, ${rgba.B})`;
			});
  	}

	render()
	{
		return (
			<div className="footer">
				<div className="footer-item"><a href="https://github.com/volleio/volleio.github.io" title="Licensed under the MIT License">Open Source</a></div>
				<div className="color-picker-container"></div>
				<style jsx>
				{`
					.footer {
						margin-top: 50vh;
						margin-bottom: 8px;
						display: flex;
						align-items: center;
						justify-content: center;

						color: #AAA;
					}

					.footer-item {
						padding: 8px;
					}

					a {
						color: #AAA;
					}
				`}
				</style>
			</div>
		);
  	}
}

export default Footer;