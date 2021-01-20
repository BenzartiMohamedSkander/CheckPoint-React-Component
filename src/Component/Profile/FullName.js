import React from 'react'
import './Profile.css';

export default function FullName() {
    return (
        <div>
            <header>
            <nav>


                <a href="#my-resume">My Resume</a>
                <a href="#about-me">Aout Me</a>
                <a href="#contact">Contact </a>


            </nav>

            <div className="my-text">
                <h1 style={{ fontSize:"50px"}}>I am Skander Benzarti</h1>
            <h2>I'm a developper </h2><br/>
                <h3 className="text-upercase">and this is my Resume</h3>

</div>
</header>
        </div>
    )
}
