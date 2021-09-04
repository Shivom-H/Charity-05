import React from 'react'

export default function hero_ban() {
    return (
        <div className="main-hero-banner">
            <div className="row">
            <div className="col-6 custom-imp-msg">
                <h2>We've Helped helpless people for <strong>25 years</strong> with trust and we're happy!</h2>
                <br/>
                <br/>
                <br/>
                <button type="button" className="btn btn-primary volunteer-btn pill"> BECOME A VOLUNTEER </button>
            </div>
            <br/>
            

            <div className="col-6 custom-icon-hero">
            
            <button type="button" className="btn btn-warning" style={{borderRadius:"50%" , height:"115px" , width:"115px"}}>
            <i className="fas fa-trophy text-dark"></i>
            <div className="text-dark"><b>43 Awards</b></div>
            </button> 
            
            <button type="button" className="btn btn-warning" style={{borderRadius:"50%" , height:"115px" , width:"115px"}}>
            <i className="fas fa-users"></i>
            <div className="text-dark"><b>3500 Volunteers</b></div>
            </button>
            
            <button type="button" className="btn btn-warning" style={{borderRadius:"50%" , height:"115px" , width:"115px"}}>
            <i className="fas fa-file-archive"></i>
            <div className="text-dark"><b>540 Projects</b></div>
            </button>
            
            </div>
            </div>
        </div>
    )
}
