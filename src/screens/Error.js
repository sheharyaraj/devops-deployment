import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import error from '../images/error.png'

export default function Error() {
    return (
        <div style={{backgroundColor:"#1F1B2D", height: "100%", width: "100%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Container>
                <Row style={{paddingBottom:"30px",justifyContent: "center"}}>
                    <img style={{width:"auto",height:"100px"}} src={error} alt="" />       
                </Row>
                <Row>
                    <h2 style={{fontSize:"40px", fontWeight:"bold"}} className='text-white'>Error 404</h2>
                </Row>
                <Row>
                    <p className='text-white'>Page not Found</p>
                </Row>
            </Container>
        </div>
    )
}
