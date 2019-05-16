import Layout from '../components/Layout.js'
import Card from '../components/Card.js'
import Link from 'next/link'

export default function HomePage() {
    return (
      <Layout>
        <Card title="Hi!">
            <p>Lucas is working as a Software Engineer at <a href="http://www.exagoinc.com/">Exago</a>.</p>
            <p>He graduated from <a href="http://rpi.edu/">Rensselaer Polytechnic Institute</a> in 2017 with a B.S. in Computer Science.
            His most recent work may be viewed on his <a href="https://github.com/volleio">Github profile</a>.</p>
        </Card>
        <Card title="Projects">
            
        </Card>
        <style jsx>{`

        `}</style>
      </Layout>
    )
  }