import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
      <div className="layout">
        <Header />
		{props.children}
		<Footer />
        <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
          .layout {
            font-family: 'Source Sans Pro', sans-serif;
            color: #323232;
            min-height: 100vh;
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
				--dark-mode: 0;
				filter: invert(var(--dark-mode));
				transition: filter 0.2s ease-in-out;
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

			.no-invert {
				filter: invert(var(--dark-mode));
				transition: filter 0.2s ease-in-out;
			}
        `}
        </style>
      </div>
    )
  }