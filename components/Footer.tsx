import React, { Component } from 'react';
import '../static/colourpicker.css';
import ColorPicker from './ColorPicker';
import { Colour } from './colourpicker';

class Footer extends Component<IFooterProps> {
	constructor(props: IFooterProps) {
		super(props);
	}

	public render() {
		return (
			<div className="footer">
				<div className="footer-item">
					<a href="https://github.com/volleio/volleio.github.io" title="Licensed under the MIT License" aria-label="This site's source code">Open Source</a>
				</div>
				<div className="footer-item">
					<ColorPicker updateLayoutTheme={this.props.updateLayoutTheme} />
				</div>
				<style jsx>
					{`
					.footer {
						position: relative;
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

interface IFooterProps {
	updateLayoutTheme: (color: Colour) => void;
}

export default Footer;
