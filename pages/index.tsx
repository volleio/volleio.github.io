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
							I'm a full stack developer and Manager of Software Engineering at 
							<a href="https://www.exagoinc.com/"> Exago Inc</a>, 
							a business intelligence software company in Uptown Kingston, NY.
						</p>
					</Card>
				</div>
				<div className="card-grid-title">
					<h2>Projects</h2>
					<p>I 💖 FOSS, and I'm proud <a href="https://github.com/exagoinc/" aria-label="Exago Inc's GitHub">Exago does, too</a>! These are some of the open source projects I'm working on.</p>
				</div>
				<div className="card-grid">
					<Card title="Biometric Diary">
						<Frame image="">

						</Frame>
					</Card>
					<Card title="Mobile DevTools">
						<Frame image="">

						</Frame>
					</Card>
					<Card title="Colour Picker">
						<Frame image="">

						</Frame>
					</Card>
					<Card title="Hoyt L. Sherman's Flash Lab VR">
						<Frame image="">

						</Frame>
					</Card>
					<Card title="Hackathon Projects">
						<Frame image="">

						</Frame>
						<Frame image="">

						</Frame>
					</Card>
					<Card title="Volle.io!">
						<Frame image="">

						</Frame>
					</Card>
				</div>
				<div className="card-grid-title">
					<h2>Web Design</h2>
					<p>I'm actively working on a few <a href="https://squarespace.com/">Squarespace</a> websites, heavily customized with JS &amp; CSS.</p>
				</div>
				<div className="card-grid">
					<Card title="Food Diplomat">
						<Frame image="">

						</Frame>
					</Card>
					<Card title="Glo Spa Woodstock">
						<Frame image="">

						</Frame>
					</Card>
				</div>
			</div>
			<style jsx>{`
				.main-content-column {
					display: flex;
					flex-direction: column;
				}

				.welcome-card {
					display: flex;
					justify-content: center;
					margin: 0 16px;
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
						margin: 0 200px;
					}

					.card-grid {
						grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
					}
				}
			`}</style>
		</Layout>
	);
}
