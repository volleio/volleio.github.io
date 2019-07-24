import React, { Component, JSXElementConstructor, MouseEvent } from "react";
import ReactDOM from "react-dom";

class Popup extends Component<IPopupProps> {
	constructor(props) {
		super(props);
	}

	public render() {
		const items = this.props.items.map((item) => (
			<div
				className="popup__item"
				onClick={item.onClick}
				key={item.title}
			>
				{item.title}
				<style jsx>
					{`
						.popup__item {
							padding: 8px 16px;
							font-size: 18px;
							cursor: pointer;
						}
						.popup__item:hover {
							background-color: rgba(50, 50, 50, 0.1);
						}
					`}
				</style>
			</div>
		));

		return (
			<div className="popup">
				{items}
				<style jsx>
					{`
						.popup {
							position: absolute;
							right: 0;
							margin: 8px;
							display: flex;
							flex-direction: column;
							white-space: nowrap;

							box-shadow: 0 1px 4px 2px rgba(50, 50, 50, 0.1);
							border: 1px solid rgba(50, 50, 50, 0.3);
							border-radius: 4px;
							background-color: #fff;

							user-select: none;
						}
					`}
				</style>
			</div>
		);
	}
}

interface IPopupProps {
	items: IPopupItemOption[];
}

export interface IPopupItemOption {
	title: string;
	onClick: (evt: MouseEvent) => void;
}

export default Popup;
