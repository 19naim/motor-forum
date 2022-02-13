import React, {useContext} from 'react'
import { ForumContext } from '../contexts/ForumContextProvider'
import { Container, Row, Col } from 'reactstrap';


const Home = () => {
  const { subjects } = useContext(ForumContext)

  const mapSubjects = () => {
    return subjects.map((subject, i) => {
      return (
        <div key={'sub' + subject._id + i}>
          <Row className="mx-0">
            <Col xs="12" sm="8">
                <h2 className="text-secondary mt-1 px-2">{subject.subject}</h2>
                <p className="text-dark text-justify px-2">{subject.description}</p> 
            </Col>
            <Col sm="4" className="mt-5 text-right d-none d-sm-block d-md-block d-lg-block pr-4">
              <h5>{subject.threads.length}</h5>
            </Col>
          </Row>
          <hr/>
        </div>    
      )
    })
  }

  return (
    <Container className="container mx-auto px-0" >
      {subjects&&mapSubjects()}
    </Container>
  )
}

export default Home