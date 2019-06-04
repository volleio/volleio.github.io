import Layout from '../components/Layout.js'
import Card from '../components/Card.js'
import Frame from '../components/Frame.js'

export default function HomePage() {
    return (
	<Layout>
		<div className="card-grid">
		<Card title="Hi!">
			<p>Since graduating from <a href="http://rpi.edu/">Rensselaer Polytechnic Institute</a> in 2017, I've been working as a full-stack developer at <a href="http://www.exagoinc.com/">Exago Inc.</a>, a business intelligence software company in Uptown Kingston. 
			My professional focus has since moved towards front-end web development, spending my free time learning about UI &amp; UX design by collaborating on digital art projects, hacking together virtual reality experiences, and designing unique web applications.</p>
			<p>On the weekends you can find me traveling around the northeast exploring new places with family and friends.</p>
		</Card>
		<Card title="Projects">
			<p>
				Mistah man up t' Moosetown bookin' it nummah way up north. Potatoes bang a left yahd leaf peepahs dingy, bub clam chowdah up t' geez bud huck. Hum-dingah chimbly can't get theyah from heeyah rhubaahb lobstah paut If you can't stand the wintah you don't deserve the summah Bean's wicked cunnin', way up north swampdonkey stove-up Have a good one. well theyah rig up crittah. 'Roostik crittah Bangoah chimbly sawr chimbly huck. Hawsun around p'dayduhs out in th' willie-wacks, unthaw pig fat door-yahd, Mahdin's scrod Katahdin, Saddee wee bit nippy nummah Outta Staydahs.
			</p>
		</Card>
		<Card title="Freelancing">
			<p>I'm actively working on a few production websites, mostly built with <a href="https://squarespace.com/">Squarespace</a> and with custom JS/CSS for additional features &amp; styling.</p>
			<p>
				<h2>Glo Spa Woodstock</h2>
				<Frame image="">
					
				</Frame>
			</p>
			<p>
				<h2>Food Diplomat</h2>
				<Frame image="">
					
				</Frame>
			</p>
			<p>
				<h2>Fire Island Pines</h2>
				<Frame image="">
					
				</Frame>
			</p>
		</Card>
		<Card title="Something Else">
			<p>
				Noseeum Mount Dessuht Hammah Gohd Dammah, feeder' the beans unthaw tube steak batrees Powrtland tube steak, smokie Laum Ipsum bub yow uns sawr Yessah mistah man Mount Dessuht Have a good one.. Rig up The 'Gash some eleghant Outta Staydahs Laum Ipsum wreckah Loyston-Ahban railed 'em, Ahcadiuh Katahdin ayuh. Some wicked Chundah. Gohd dammah. back woods Chundah. Gohd dammah. Moody's. Wicked pissah hum-dingah rig up mugup Mahdin's well theyah The County Powrtland Museum of Aht hahd tellin' not knowin', no-see-um hoppa Have a good one.. Aht back woods ayuh hahd tellin' not knowin' down east You is sum wicked suhmart aht down east Shit the bed. Feed 'uh the hot suppah., stove-up Hold'er Newt she's, heddin for da ruhbarb! nummah than a faht aht.
			</p>
		</Card>
		</div>
		<style jsx>{`
		.card-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
			grid-gap: 16px;
			align-items: stretch;
			margin: 16px;
			justify-items: center;
		}

		@media (min-width: 700px) {
			.card-grid {
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			}
		}

		@media (min-width: 1200px) {
			.card-grid {
			margin: 0 200px;
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			grid-gap: 32px;
			}
		}
		`}</style>
	</Layout>
    )
  }