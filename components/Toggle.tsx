import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component<IToggleProps> {
	constructor(props: IToggleProps) {
		super(props);

		this.OnClick = this.OnClick.bind(this);
	}

	public render() {
		return (
			<div className={`toggle ${this.props.on ? '' : 'toggle--off'}`} onClick={this.OnClick}>
				<div className="toggle__bar"></div>
				<div className="toggle__button no-invert"></div>
				<style jsx>
				{`
					.toggle {
						width: 50px;
						height: 24px;
						display: flex;
						justify-content: center;
						align-items: center;
						cursor: pointer;
					}

					.toggle__bar {
						width: 100%;
						height: 10px;
						margin: 0 12px;
						box-sizing: border-box;
						background-color: #FFFC;
						border: 1px solid #CCC;
						border-radius: 5px;
					}

					.toggle__button {
						position: absolute;
						width: 24px;
						height: 24px;
						box-sizing: border-box;
						border-radius: 50%;
						${this.props.onButtonImage ? 
						`background-image: url("${this.props.onButtonImage}");` : 
						'background-color: #FFFE; border: 1px solid #CCC;'}
						transform: translateX(-12px);
						transition: transform 0.3s ease;
					}
					.toggle--off > .toggle__button {
						${this.props.offButtonImage ? 
						`background-image: url("${this.props.offButtonImage}");` : 
						'background-color: #FFFE; border: 1px solid #CCC;'};
						transform: translateX(12px);
					}
				`}
				</style>
			</div>
		);
	}

	private OnClick(): void {
		const container = ReactDOM.findDOMNode(this) as HTMLElement;
		if (this.props.on)
			container.classList.add('toggle--off');
		else
			container.classList.remove('toggle--off');

		window.setTimeout(() => {
			this.props.onToggle(!this.props.on);
		}, 150);
	}
}

interface IToggleProps {
	on: boolean;
	onToggle: (on: boolean) => void;
	onButtonImage?: string;
	offButtonImage?: string;
}

export default Toggle;
