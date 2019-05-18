export default function Card(props) {
    return (
      <div className="card-container">
        <div className="card-header">
            <h1>{props.title}</h1>
        </div>
        <div className="card-content">
            {props.children}
        </div>

        <style jsx>
        {`
          .card-container {

          }

          .card-header {

          }

          .card-content {
            font-size: 1em;
          }
        `}
        </style>
      </div>
    )
  }