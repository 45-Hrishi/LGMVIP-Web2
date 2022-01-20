import React from 'react';
import './Home.css';

export default function Home({ getData }) {
    return (
        <section className="home">
            <div className="container-fluid">
                <div className="row text text-center justify-content-around">
                    <div className="col-lg-5 mx-5">
                        <h5 className='text-light'>Name :- Hrishikesh Dattatray Kothawade</h5>
                        <h5 className='text-light'>Task2 of LGM VIP</h5>
                    </div>
                    <div className="col-lg-7">
                        <h5 className='text-light'>Click On Button to get User Details</h5>
                    </div>
                </div>
            </div>

        </section>
    )
}
