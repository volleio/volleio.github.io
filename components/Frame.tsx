export default function Frame(props: IFrameProps) {
	return (
		<div className="frame-container">
			<div className="frame-link-container">
				{props.sourceUrl && <a href={props.sourceUrl} className="frame-link source-link"></a>}
				{props.demoUrl && <a href={props.demoUrl} className="frame-link demo-link"></a>}
			</div>
			<style jsx>
			{`
				.frame-container {
					position:relative;
					height: 300px;
					margin: 16px;
					border: 1px solid rgba(50, 50, 50, 0.1);
					border-radius: 6px;
					background-image: url('${props.image}');
					background-position: top;
					background-size: cover;
				}

				.frame-link-container {
					display: flex;
					flex-direction: column;
					position: absolute;
					right: 0;
					bottom: 0;
					opacity: 0;
					transition: opacity 0.2s ease;
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
					background-image: url("/static/icons/github-link.svg");
				}
				.demo-link {
					background-image: url("/static/icons/webpage-link.svg");
				}
			`}
			</style>
			<style jsx global>
			{`
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
