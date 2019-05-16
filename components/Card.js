export default function Card(props) {
    return (
      <div className="card-container">
        <div className="card-header">
            <h1>{props.title}</h1>
        </div>
      </div>
    )
  }