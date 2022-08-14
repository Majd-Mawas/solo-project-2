// import src from '../images/Mount Fuji.png'
import logo from '../images/location.png'

export default function main(props){
    console.log(props.title)
    if(!props.title){
        return( <div className='loading'>
        </div>)
    }

    return(
        <main className="main">
            <img className='place-img' src={require('../images/'+props.title+'.png')} alt={'img'}/>
            <div className='main-details'>
                <div className='location'>
                    <img src={logo} alt={'logo'}/>
                    <h5 className='main-location'>{props.location}</h5> - 
                    <a className='gray' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <span className='main-title'>{props.title}</span>
                <div className='main-date'>
                {props.startDate}-{props.endDate}
                </div>
                <div className='main-decription'>{props.description}
                </div>
            </div>
        </main>
    )
}