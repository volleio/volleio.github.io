import Header from './Header'

export default function Layout(props) {
    return (
      <div className="layout">
        <Header />
        {props.children}
        <style jsx>
        {`
          .layout
          {
            @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
            font-family: 'Source Sans Pro', sans-serif;
            color: #323232;
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
        `}
        </style>
      </div>
    )
  }