import React from 'react'
import { Container, Row } from 'reactstrap'

const ForumFooter = () => {
  return (
    <div className="footer bottom">
    <Container className="bg-warning bg-gradient rounded-top mt-2">
      <Row>        
        <div className="mx-auto pt-3">
          <hr className="my-0 bg-secondary"/>
        </div>
      </Row>      
    </Container>
    </div>
  )
}

export default ForumFooter