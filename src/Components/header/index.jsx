import React from 'react'

export default function Header() {
    return (
        <div className="row header_container_dark">
<div className="col-6 d-flex">
<div className="icon">

<i class="fab fa-facebook-f"></i>
<i class="fab fa-linkedin-in"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-twitter"></i>

</div>

<div className="phone_head">
+917777777777
</div>
</div>

<div className="col-6">
<div className="login_signup_container">

{/* dropdown here */}

<button>
<i class="fas fa-user-plus"></i>
    {/* For spacing */}
    &nbsp;
    
    SIGNUP</button>
<button><i class="fas fa-unlock"></i> &nbsp;LOGIN</button>

</div>

</div>



            
        </div>
    )
}
