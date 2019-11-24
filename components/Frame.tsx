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
					border: 1px solid rgba(50, 50, 50, 0.1);
					border-radius: 6px;
					background-image: url('${props.image}');
				}

				.frame-container:hover .frame-link-container {
					opacity: 1;
				}
				.frame-link-container {
					display: flex;
					position: absolute;
					right: 0;
					bottom: 0;
					opacity: 0;
					transition: opacity 0.2s ease;
				}

				.frame-link {
					width: 36px;
					height: 36px;
					margin: 6px;
					border-radius: 3px;
					background-color: #000;
					box-shadow: 0 1px 4px 2px rgba(50, 50, 50, 0.1);
					opacity: 0.9;
					transition: opacity 0.1s ease;
				}
				.frame-link: hover {
					opacity: 1;
				}
				.source-link {
					background-image: url("/static/icon-github-link.svg");
				}
				.demo-link {
					background-image: url("/static/icon-webpage-link.svg");
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
}
