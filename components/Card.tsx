import React, { Component, MouseEvent } from "react";

class Card extends Component<ICardProps>
{
	constructor(props: ICardProps) {
		super(props);
	}

	public render()
	{
		return (
			<div className="card-container">
				<div className="card-header">
					<h1>{this.props.title}</h1>
				</div>
				<div className="card-content">
					{this.props.children}
				</div>
	
				<style jsx>
					{`
					.card-container {
						padding: 16px;
						display: flex;
						flex-direction: column;
			
						background-color: rgba(255, 255, 255, 0.9);
						border: 1px solid rgba(50, 50, 50, 0.1);
						border-radius: 2px;
						box-shadow: 0 1px 4px 2px rgba(50, 50, 50, 0.1);
					}
			
					.card-header {
			
					}
			
					.card-content {
						font-size: 1em;
						overflow: auto;
					}
					`}
				</style>
			</div>
		);
	}
}

interface ICardProps {
	title: string;
}

export default Card;