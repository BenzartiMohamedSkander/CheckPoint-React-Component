import React from 'react'
import './Profile.css';
import profile2 from "./profil2.png"


export default function ProfilPhoto() {
    return (
        <div>
             <main>

<section id="my-resume">
    <div>
        <h2 style={{color: "#fff", marginTop: "50px",textAlign: "center"}}>My Resume </h2>
    </div>
    <table className="myResume-table">
        <tr>
            <th>
                <h2 style={{color: "#fff",fontSize: "25px",fontWeight: 200}}>Education</h2>
            </th>


            <th>
                <h2 style={{color: "#fff",fontSize:"25px",fontWeight: "200"}}>Experience</h2>
            </th>

        </tr>
    </table>
    <table className="myResume-table" style={{borderSpacing: "15px"}}>
        <tr>
            <td className="rcorners1" style={{marginTop:" 20px"}}>
                <span className="date">

                    March 2013 - Present
                </span><br/><br/>
                <h3 style={{color: "#bac964",fontSize: "20px",fontWeight: "200"}}>
                    Masteral in Information Technology
                </h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <br/><span className="school">Tunis University</span>
            </td>
            <td className="rcorners1" style={{marginTop: "20px"}}>
                <span className="date">

                    April 2015 - Present
                </span><br/><br/>
                <h3 style={{color: "#bac964",fontSize: "20px",fontWeight:200 }}>

                    Lead Product Designer
                </h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <br/><span className="school">B2B Technology</span>

            </td>
        </tr>

        <tr>
            <td className="rcorners1" style={{marginTop: "20px"}}>
                <span className="date">

                    June 2015 - August 2017
                </span><br/><br/>
                <h3 style={{color: "#bac964",fontSize: "20px",fontWeight: 200}}>
                    Masteral in Information Technology
                </h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <br/><span className="school">Tunis University</span>
            </td>
            <td className="rcorners1" style={{marginTop:"20px"}}>
                <span className="date">

                    April 2019 - Present
                </span><br/><br/>
                <h3 style={{color:"#bac964" ,fontSize: "20px",fontWeight: 200}}>

                    Lead Product Designer
                </h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                <br/><span className="school">B2B Technology</span>

            </td>
        </tr>

    </table>



</section>
<section id="about-me">

    <div>
        <h2 style={{color: "#fff", marginTop: "200px",textAlign: "center"}}></h2>
    </div>

    <table>
        <tr>
            <td style={{verticalAlign: "top"}}><img src={profile2} alt="Image placeholder"/></td>
            <td style={{verticalAlign: "top"}}>
                <h2 style={{color:" #fff", textAlign: "center"}}>About me </h2>

                <p style={{fontWeight: 200, lineHeight: "1.5",fontSize: "1.25rem"}}>Separated they live in
                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p style={{marginBottom: "3rem"}}>A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country, in which roasted parts of
                    sentences fly into your mouth.</p>
                <a style={{backgroundColor:" #bac964"}} className="link-btn" href="default.asp">HIRE ME</a>
                <a style={{backgroundColor: "#7c7c7a"}} className="link-btn" href="default.asp">DOWNLOAD CV</a>

            </td>
        </tr>

    </table>

</section>



<section  id="contact">
    <div >
        <h2 style={{color: "#fff", marginTop: "150px",textAlign: "center"}}>Contact </h2>
    </div>

    <table style={{width: "100%"}}>
        <tr>
            <td style={{width: "50%"}}>
                <form action="">
                    <input type="text" id="fname" name="name" placeholder="Your Name.."/>
                    <input type="text" id="fname" name="email" placeholder="Your Email.."/>
                    <input type="text" id="fname" name="phone" placeholder="Your Phone.."/>
                 <textarea className="my-textarea" name="" id="frame" cols="30" rows="10" placeholder="Write a message.."></textarea>
                 <a style={{backgroundColor: "#bac964"}} className="link-btn" href="default.asp">SEND MESSAGE</a>


                </form>
            </td>
            <td >
                <h4 >My Contact Details</h4>
                <ul className="contact-list">
                    <li style={{color: "rgb(112, 109, 109)",margin: "20px"}}> <span> Email </span>benzarti.skander@gmail.com</li>
                    <li style={{color: "rgb(112, 109, 109)",margin: "20px"}}> <span> Phone </span>+21622291534</li>
                    <li style={{color: "rgb(112, 109, 109)",margin: "20px"}}> <span> Adresse </span>Ariana</li>
                   
                   
                </ul>
            </td>
        </tr>

    </table>

</section>


</main>
        </div>
    )
}
