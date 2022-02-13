import React, {useContext} from 'react'
import { ForumContext } from '../contexts/ForumContextProvider'
import { Container, Row, Col } from 'reactstrap';

const ThreadList = () => {
  const { threads } = useContext(ForumContext)

  const mapThreads = () => {
    return threads.map((thread, i) => {
      return (
        <div key={'sub' + thread._id + i}>
        <Row>
          <Col xs="9" sm="8">
              <h5 className="text-secondary mt-1 pb-0">{thread.topic}</h5>
              <p className="text-primary mt-0 pt-0">Writer: {thread.author.username.toUpperCase()}</p>
          </Col>
          <Col xs="3" sm="4" className="text-right mt-2 d-none d-lg-block">{thread.posts.length}</Col>
        </Row>
        <hr className="mt-1"/>
        </div>    
      )
    })
  }

  return (
    <Container className="themed-container">
      <Row className="text-light bg-info pt-2 mb-3">
        <Col xs="9" sm="8"><h5>Threads</h5></Col>
        <Col xs="3" sm="4" className="text-lg-right d-none d-lg-block"><h5>Answers</h5></Col>
      </Row>
      {threads && mapThreads()}
    </Container>
  )
}

export default ThreadList