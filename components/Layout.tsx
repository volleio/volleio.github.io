import Header from './Header';
import Footer from './Footer';

export default function Layout(props: ILayoutProps) {
	return (
		<div className="layout">
			<Header />
			{props.children}
			<Footer />
			<style jsx>
			{`
				@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
				.layout {
					font-family: 'Source Sans Pro', Arial, sans-serif;
					color: #323232;
					min-height: 100vh;
					background: linear-gradient(0deg,#b3b3b312,transparent);
				}
			`}
			</style>
			<style jsx global>
			{`
				*,
				*:before,
				*:after {
					box-sizing: border-box;
				}

				html {
					font-size: 100%;
				}
				html.dark-mode {
					filter: invert(1);
				}

				body {
					margin: 0;
				}

				h1 {
					margin-block-start: 0.33em;
					margin-block-end: 0.33em;
				}

				p {
					text-indent: 2em;
					margin-block-start: 0.33em;
					margin-block-end: 0.33em;
				}

				a:link {
					text-decoration: none;
				}
				a:visited {
					text-decoration: none;
				}
				a:hover {
					text-decoration: underline;
				}
				a:active {
					text-decoration: underline;
				}
				html.dark-mode a {
					filter: invert(1);
				}

				html.dark-mode .no-invert {
					filter: invert(1);
				}
			`}
			</style>
		</div>
	);
}

interface ILayoutProps {
	children: any;
}
