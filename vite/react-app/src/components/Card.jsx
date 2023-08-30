import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'

const Card =() => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Basic React.JS</h3>
                <p className="card-text">การใช้ react  เบื้องต้น สำหหรับกาสร้างเเว็ปเเอพลิเคชั่น</p>
                <a href="#" className="btn btn-info">อ่านต่อ</a>
                <div>
  <Button color="primary">
    primary
  </Button>
  {' '}
  </div>
            </div>
        </div>

        
    )
}

export default Card;