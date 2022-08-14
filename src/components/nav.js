import src from './../images/earth-planet.png'

export default function nav(){
    return(
        <nav className='navbar'>
            <img src={src} alt="logo"/>
            <h4>my travel journal</h4>
        </nav>
    )
}