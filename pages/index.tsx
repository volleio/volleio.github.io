import Layout from '../components/Layout';
import Card from '../components/Card';
import Frame from '../components/Frame';

export default function HomePage() {
	return (
		<Layout>
			<div className="main-content-column">
				<div className="welcome-card">
					<Card title="👋">
						<p>
							I'm a full stack developer and Manager of Software Engineering 
							at <a href="https://www.exagoinc.com/">Exago Inc</a>, 
							a business intelligence software company in Uptown Kingston, NY.
						</p>
					</Card>
				</div>
				<div className="card-grid-title">
					<h2>Projects</h2>
					<p>I 💖 FOSS, and I'm proud <a href="https://github.com/exagoinc/" aria-label="Exago Inc's GitHub">Exago does, too</a>! These are some of the open source projects I'm working on.</p>
				</div>
				<div className="card-grid">
					<Card title="Biometric Diary" url="https://github.com/volleio/Biometric-Diary">
						<Frame image="/static/images/biometric-diary.png?webp" sourceUrl="https://github.com/volleio/Biometric-Diary"
							demoUrl="https://biometric-diary.herokuapp.com/">
						</Frame>
					</Card>
					<Card title="Mobile DevTools" url="https://github.com/volleio/mobile-devtools">
						<Frame image="/static/images/mobile-devtools.png?webp" sourceUrl="https://github.com/volleio/mobile-devtools"
							demoUrl="https://chrome.google.com/webstore/detail/mobile-devtools/okfdckomkajiaeejefanbonnhppmplpo">
						</Frame>
					</Card>
					<Card title="Colour Picker" url="https://github.com/exagoinc/ColourPicker">
						<Frame image="/static/images/colourpicker.png?webp" sourceUrl="https://github.com/exagoinc/ColourPicker"
							demoUrl="https://exagoinc.github.io/ColourPicker/examples.html">
						</Frame>
					</Card>
					<Card title="Hoyt L. Sherman's Flash Lab VR" url="https://github.com/volleio/Flash-Lab">
						<Frame image="/static/images/flash-lab.png?webp"
							demoUrl="https://flash-lab.glitch.me/"
							presentationUrl="https://web-vr-hvwp.glitch.me">
						</Frame>
					</Card>
					<Card title="Hackathon Projects" url="https://github.com/volleio/">
						<Frame image="">
						</Frame>
						<Frame image="">
						</Frame>
					</Card>
					<Card title="Volle.io!" url="https://github.com/volleio/volleio.github.io">
						<Frame image="/static/images/volle.io.png?webp" sourceUrl="https://github.com/volleio/volleio.github.io">
						</Frame>
					</Card>
				</div>
				<div className="card-grid-title">
					<h2>Web Design</h2>
					<p>I'm actively working on a few <a href="https://squarespace.com/">Squarespace</a> websites, heavily customized with JS &amp; CSS.</p>
				</div>
				<div className="card-grid">
					<Card title="Food Diplomat" url="https://food-diplomat.com/">
						<Frame image="/static/images/food-diplomat.png?webp" demoUrl="https://food-diplomat.com/">
						</Frame>
					</Card>
					<Card title="Glo Spa Woodstock" url="https://www.glospawoodstock.com/">
						<Frame image="/static/images/glo-spa-woodstock.png?webp" demoUrl="https://www.glospawoodstock.com/">
						</Frame>
					</Card>
				</div>
			</div>
			<style jsx>{`
				.main-content-column {
					display: flex;
					flex-direction: column;
					transform: translateY(calc(var(--header-height-in) * var(--header-height-in) * -25vh));
				}

				.welcome-card {
					width: 90%;
					max-width: 600px;
					display: flex;
					justify-content: center;
					margin: 0 auto;
				}

				.card-grid-title {
					margin: 0 16px;
					text-align: center;
				}
				.card-grid-title h2 {
					margin: 2em 0 0;
				}
				.card-grid-title p {
					text-indent: 0;
				}

				.card-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
					grid-gap: 16px;
					margin: 16px;
				}

				@media (min-width: 700px) {
					.main-content-column {
						
					}

					.card-grid {
						grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
					}
				}

				@media (min-width: 1200px) {
					.main-content-column {
						margin-left: 200px;
						margin-right: 200px;
					}

					.card-grid {
						grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
					}
				}
			`}</style>
		</Layout>
	);
}
