import React from 'react';


const Home=({handleLogout},{email})=>{
    return (
        <section classname="home">
            <nav>
                <h2>Welcome</h2>



                <button onClick={handleLogout}>Logout</button>
                
            </nav>
        </section>
    )
}

export default Home;