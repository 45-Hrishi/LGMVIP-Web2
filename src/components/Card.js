import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='users'>
            {props.users.map((user, id) => {
                const { avatar, first_name, last_name, email } = user;
                return (
                    <div className="card" style={{ "width": "22rem" ,"height":"8rem"}} key={id}>
                        <div className="container">
                        <div className="row gx-0 justify-content-between">
                            <div className="col-lg-3 my-3">
                                <img src={avatar} className="card-img-top avatar" />
                            </div>
                            <div className="col-lg-8 details my-4">
                                <h5>Name : {first_name} {last_name}</h5>
                                <p>Email : {email}</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    
                );
            })}
        </div>
    );
}