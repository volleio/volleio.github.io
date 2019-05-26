import React, { Component } from "react";
import ReactDOM from "react-dom";
import Popup from './Popup';

class DropdownMenu extends Component 
{
  constructor(props) 
  {
    super(props);
  }

  onButtonClick(evt)
  {
    const menuButton = evt.currentTarget;
    if (menuButton.classList.contains("open"))
    {
        menuButton.classList.remove("open");
    }
    else
    {
        menuButton.classList.add("open");
    }
  }

  render()
  {
    return (
        <div className="dropdown-menu">
            <div className="dropdown-menu-button" onClick={this.onButtonClick}>
                <div className="dropdown-menu-button__line dropdown-menu-button__line--1"></div>
                <div className="dropdown-menu-button__line dropdown-menu-button__line--2"></div>
                <div className="dropdown-menu-button__line dropdown-menu-button__line--3"></div>
            </div>
            <Popup>
                
            </Popup>
            <style jsx>
            {`
                .dropdown-menu-button {
                    position: relative;
                    width: 48px;
                    height: 48px;
                    border-radius: 3px;
                    background-color: rgba(255, 255, 255, 1);
                    transition: all 0.1s ease-in-out;
                    cursor: pointer;
                }
                .dropdown-menu-button:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                }

                .dropdown-menu-button__line {
                    position: absolute;
                    height: 2px;
                    width: 36px;
                    left: calc(50% - 18px);
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
                    width: 37px;
                    transform: rotate(45deg) translate(1px, -6px);
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
                    width: 37px;
                    transform: rotate(-45deg) translate(1px, 6px);
                }
            `}
            </style>
        </div>
    );
  }
}

export default DropdownMenu;