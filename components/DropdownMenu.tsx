import React, { Component } from "react";
import ReactDOM from "react-dom";
import Popup from './Popup';

class DropdownMenu extends Component<DropdownMenuProps>
{
	constructor(props) {
		super(props);
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(evt) {
		this.props.toggleShowMenu();
	}

	render() {
		let popup = null;
		if (this.props.showMenu) {
			popup = (<Popup items={this.props.items}></Popup>);
		}

		return (
			<div className="dropdown-menu">
				<div className={"dropdown-menu-button" + (this.props.showMenu ? " open" : "")} onClick={this.onButtonClick}>
					<div className="dropdown-menu-button__line dropdown-menu-button__line--1"></div>
					<div className="dropdown-menu-button__line dropdown-menu-button__line--2"></div>
					<div className="dropdown-menu-button__line dropdown-menu-button__line--3"></div>
				</div>
				{popup}
				<style jsx>
					{`
					.dropdown-menu-button {
						position: relative;
						width: 40px;
						height: 40px;
						border-radius: 3px;
						background-color: rgba(255, 255, 255, 0.2);
						transition: all 0.1s ease-in-out;
						cursor: pointer;
					}
					.dropdown-menu-button:hover {
						background-color: rgba(0, 0, 0, 0.05);
					}
					
					.dropdown-menu-button__line {
						position: absolute;
						height: 2px;
						width: 30px;
						left: calc(50% - 15px);
						background-color: #323232;
						border-radius: 2px;
						transition: all 0.1s ease-in-out;
						transform: rotate(0deg) translateY(0px);
						transform-origin: left;
					}
					
					.dropdown-menu-button__line--1 {
						top: calc(30% - 1px);
					}
					.dropdown-menu-button.open .dropdown-menu-button__line--1 {
						width: 33px;
						transform: rotate(45deg) translate(0, -5px);
					}
					
					.dropdown-menu-button__line--2 {
						top: calc(50% - 1px);
					}
					.dropdown-menu-button.open .dropdown-menu-button__line--2 {
						width: 2px;
						left: calc(50% - 1px);
					}
					
					.dropdown-menu-button__line--3 {
						top: calc(70% - 1px);
					}
					.dropdown-menu-button.open .dropdown-menu-button__line--3 {
						width: 33px;
						transform: rotate(-45deg) translate(0, 5px);
					}
					`}
				</style>
			</div>
		);
	}
}

interface DropdownMenuProps {
	toggleShowMenu: () => void;
	showMenu: () => void;
	items: Popup;
}

export default DropdownMenu;