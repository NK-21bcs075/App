import './Dashboard.css'

const Dashboard=()=>{
    return(
        <>
            <div className='navbar'>
                <div className='name'>
                    <p>Dashboard</p>
                </div>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/">Log off</a></li>
                </ul>
                
            </div>
        </>
    )
}

export default Dashboard