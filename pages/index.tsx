import Layout from '../components/Layout';
import Card from '../components/Card';
import Frame from '../components/Frame';

export default function HomePage() {
	return (
		<Layout>
			<div className="main-content-column">
				<div className="welcome-card">
					<Card title="👋" invertTitle={true}>
						<p>
							I'm a full stack developer and Manager of Software Engineering 
							at <a href="https://www.exagoinc.com/">Exago Inc</a>, 
							a business intelligence software company in <a href="https://www.google.com/maps/place/Kingston,+NY+12401/">Uptown Kingston, NY</a>.
						</p>
					</Card>
				</div>
				<div className="card-grid-title">
					<h2>Projects</h2>
					<p>
						I <span className="no-invert">💖</span> FOSS, and I'm proud <a href="https://github.com/exagoinc/" aria-label="Exago Inc's GitHub">Exago does, too</a>! 
						These are some of the open source projects I'm working on.
					</p>
				</div>
				<div className="card-grid">
					<Card title="Biometric Diary" url="https://github.com/volleio/Biometric-Diary">
						<Frame image="/static/images/biometric-diary.png?trace" sourceUrl="https://github.com/volleio/Biometric-Diary"
							demoUrl="https://biometric-diary.herokuapp.com/">
							A note taking web app that uses a <a href="https://www.typingdna.com/">keystroke pattern authentication API</a>.
						</Frame>
					</Card>
					<Card title="Mobile DevTools" url="https://github.com/volleio/mobile-devtools">
						<Frame image="/static/images/mobile-devtools.png?trace" sourceUrl="https://github.com/volleio/mobile-devtools"
							demoUrl="https://chrome.google.com/webstore/detail/mobile-devtools/okfdckomkajiaeejefanbonnhppmplpo">
							A mobile browser extension for debugging web sites.
						</Frame>
					</Card>
					<Card title="Colour Picker" url="https://github.com/exagoinc/ColourPicker">
						<Frame image="/static/images/colourpicker.png?trace" sourceUrl="https://github.com/exagoinc/ColourPicker"
							demoUrl="https://exagoinc.github.io/ColourPicker/examples.html">
							A pure TypeScript + LESS color picker module.
						</Frame>
					</Card>
					<Card title="Hoyt L. Sherman's Flash Lab VR" url="https://github.com/volleio/Flash-Lab">
						<Frame image="/static/images/flash-lab.png?trace"
							demoUrl="https://flash-lab.glitch.me/"
							presentationUrl="https://web-vr-hvwp.glitch.me">
							A virtual reality recreation of a technique for teaching drawing.
						</Frame>
					</Card>
					<Card title="Hackathon Projects" url="">
						<h2 className="no-invert"><a href="https://github.com/cowang4/HackTechValleyStefani">Sanitation Vehicle Tracker</a></h2>
						<Frame image="/static/images/sanitation-vehicle-tracker.png?trace" sourceUrl="https://github.com/cowang4/HackTechValleyStefani"
							demoUrl="https://gregcowan.me/HackTechValleyStefani/map.html">
							A web application for tracking fleets of public vehicles.
							🏆 Won Innovative Use of Data at <a href="https://www.timesunion.com/business/article/Auto-Mate-coders-win-Hack-Tech-Valley-at-SCCC-12609545.php">Hack Tech Valley</a>.
						</Frame>
						<br/>
						<h2 className="no-invert"><a href="https://github.com/garretpremo/summarytospeech">Summary to Speech</a></h2>
						<Frame image="/static/images/summary-to-speech.png?trace" sourceUrl="https://github.com/garretpremo/summarytospeech">
							A chrome extension that summarizes and vocalizes text.
							🏆 Won the Euphony Text-to-Speech API Prize at <a href="https://medium.com/@hackupstate/hack-upstate-viii-the-results-are-in-4c4f4fb1abf">Hack Upstate VIII</a>.
						</Frame>
					</Card>
					<Card title="Volle.io!" url="https://github.com/volleio/volleio.github.io">
						<Frame image="/static/images/volle.io.png?trace" sourceUrl="https://github.com/volleio/volleio.github.io">
						</Frame>
					</Card>
				</div>
				<div className="card-grid-title">
					<h2>Web Design</h2>
					<p>I'm actively working on a few <a href="https://squarespace.com/">Squarespace</a> websites, heavily customized with JS &amp; CSS.</p>
				</div>
				<div className="card-grid">
					<Card title="Food Diplomat" url="https://food-diplomat.com/">
						<Frame image="/static/images/food-diplomat.png?trace" demoUrl="https://food-diplomat.com/">
						</Frame>
					</Card>
					<Card title="Glo Spa Woodstock" url="https://www.glospawoodstock.com/">
						<Frame image="/static/images/glo-spa-woodstock.png?trace" demoUrl="https://www.glospawoodstock.com/">
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
