import { Component } from 'react';
import ReactDOM from 'react-dom';

class Frame extends Component<IFrameProps> {
	constructor(props: IFrameProps) {
		super(props);

		this.onPortalClick = this.onPortalClick.bind(this);
	}

	public render () {
		return (
			<div className="frame-container">
				{this.props.children && <div className={`frame-description-container ${
					[this.props.sourceUrl, this.props.demoUrl, this.props.presentationUrl].filter(val => val).length > 1 ?
					'frame-description-container--two-links' : ''}`}>
						<div className="frame-description">{this.props.children}</div>
					</div>}
				<div className="frame-link-container">
					{this.props.sourceUrl && <a href={this.props.sourceUrl} className="frame-link source-link"></a>}
					{this.props.demoUrl && <a href={this.props.demoUrl} className="frame-link demo-link"></a>}
					{this.props.presentationUrl && <a href={this.props.presentationUrl} className="frame-link presentation-link"></a>}
				</div>
				<style jsx>
				{`
					.frame-container {
						position:relative;
						height: 300px;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 1px solid rgba(50, 50, 50, 0.1);
						border-radius: 6px;
						background-image: url('${this.props.image}');
						background-position: top;
						background-size: cover;
						overflow: hidden;
						transition: all 0.4s ease;
					}
					.frame-container:after {
						content: '';
						position: absolute;
						top: 0; left: 0; bottom: 0; right: 0;
						background: radial-gradient(ellipse, transparent 50%, #0001 150%);
						pointer-events: none;
					}

					.frame-container.frame-container--active-portal {
						border-radius: 0;
						border: 0px solid #0000;
					}

					.frame-description-container {
						position: absolute;
						width: 100%;
						min-height: 54px;
						bottom: 0;
						padding: 6px;
						padding-right: 60px;
						display: flex;
						justify-content: center;
						align-items: center;
						opacity: 0;
						background-color: #FFFE;
						box-shadow: 0px 3px 8px 0px #32323232;
						transition: opacity 0.2s ease;
						z-index: 1;
					}
					.frame-description-container.frame-description-container--two-links {
						min-height: 104px;
					}

					.frame-description {
						font-size: 16px;
						text-align: center;
						vertical-align: middle;
					}

					.frame-link-container {
						display: flex;
						flex-direction: column;
						position: absolute;
						right: 0;
						bottom: 0;
						opacity: 0;
						transition: opacity 0.2s ease;
						z-index: 1;
					}

					.frame-link {
						width: 36px;
						height: 36px;
						margin: 0 12px 12px;
						border-radius: 3px;
						opacity: 0.5;
						background-color: rgba(10, 10, 20);
						background-position: center;
						background-size: 24px;
						background-repeat: no-repeat;
						box-shadow: 0px 1px 5px 2px rgba(255,255,255,0.25);
						transform: scale(0.95) translateY(0px);
						transition: opacity 0.1s ease, transform 0.1s ease;
					}
					.frame-link:hover {
						opacity: 0.9;
						transform: scale(1) translateY(-1px);
					}
					
					.source-link {
						background-image: url("/static/images/github-link.svg?sprite");
					}
					.demo-link {
						background-image: url("/static/images/webpage-link.svg?sprite");
					}
					.presentation-link {
						background-image: url("/static/images/presentation-link.svg?sprite");
					}
				`}
				</style>
				<style jsx global>
				{`
					.frame-container:hover .frame-description-container, .is-mobile .frame-container > .frame-description-container, 
					.frame-container:hover .frame-link-container, .is-mobile .frame-container > .frame-link-container {
						opacity: 1;
					}

					portal {
						width: 100%;
						height: 100%;
						cursor: pointer;
					}
				`}
				</style>
			</div>
		);
	}

	public componentDidMount() {
		if (this.props.portalUrl && 'HTMLPortalElement' in window) {
			if ((window as any).portalHost) {
				window.addEventListener('portalactivate', () => this.setupPortal());
			} else {
				this.setupPortal();
			}
		}
	}

	private setupPortal() {
		const frame = ReactDOM.findDOMNode(this) as HTMLElement;
		const portal = document.createElement('portal') as HTMLIFrameElement;
		frame.appendChild(portal);
		if (this.props.portalUrl)
			portal.src = this.props.portalUrl;
			
		portal.addEventListener('click', () => this.onPortalClick());

		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		const portalWidth = frame.clientWidth;

		portal.style.height = `${portalWidth * (windowHeight / windowWidth)}px`;
	}

	private onPortalClick() {
		const frame = ReactDOM.findDOMNode(this) as HTMLElement;
		const portalElement = frame.querySelector('portal') as any;
		
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		const frameBounds = frame.getBoundingClientRect();

		frame.style.width = `${frameBounds.width}px`;
		frame.style.height = `${frameBounds.width * (windowHeight / windowWidth)}px`;
		frame.classList.add('frame-container--active-portal');

		document.body.style.transition = 'transform 0.8s ease';

		const scale = windowWidth / frameBounds.width;
		const transformFromLeft = frameBounds.left + (frameBounds.width / 2) - (windowWidth / 2);
		const transformFromTop = window.scrollY - frame.offsetTop - (frameBounds.height / 2);
		document.body.style.transform = `scale(${scale}) translate(${-1 * transformFromLeft}px, ${-1 * transformFromTop}px)`;

		document.body.addEventListener('transitionend', (evt) => {
			if (evt.propertyName === 'transform') {
				// Activate the portal once the transition has completed
				portalElement.activate();
			}
		});
	}
}

interface IFrameProps {
	image: string;
	children?: any;
	sourceUrl?: string;
	demoUrl?: string;
	presentationUrl?: string;
	portalUrl?: string;
}

// for experimental portal element
declare global { 
		namespace JSX { 
		interface IntrinsicElements {
			portal: any
		}
	}
}

export default Frame;
