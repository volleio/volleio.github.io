export default function Frame(props: IFrameProps) {
	return (
		<div className="frame-container">
			{props.children && <div className={`frame-description-container ${
				[props.sourceUrl, props.demoUrl, props.presentationUrl].filter(val => val).length > 1 ?
				'frame-description-container--two-links' : ''}`}>
					<div className="frame-description">{props.children}</div>
				</div>}
			<div className="frame-link-container">
				{props.sourceUrl && <a href={props.sourceUrl} className="frame-link source-link"></a>}
				{props.demoUrl && <a href={props.demoUrl} className="frame-link demo-link"></a>}
				{props.presentationUrl && <a href={props.presentationUrl} className="frame-link presentation-link"></a>}
			</div>
			<style jsx>
			{`
				.frame-container {
					position:relative;
					height: 300px;
					border: 1px solid rgba(50, 50, 50, 0.1);
					border-radius: 6px;
					background-image: url('${props.image}');
					background-position: top;
					background-size: cover;
					overflow: hidden;
				}
				.frame-container:after {
					content: '';
					position: absolute;
					top: 0; left: 0; bottom: 0; right: 0;
					background: radial-gradient(ellipse, transparent 50%, #0001 150%);
					pointer-events: none;
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
			`}
			</style>
		</div>
	);
}

interface IFrameProps {
	image: string;
	children?: any;
	sourceUrl?: string;
	demoUrl?: string;
	presentationUrl?: string;
}
