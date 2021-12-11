import img1  from '../assets/logopasteur.svg';


export default function Header() {
    return(
        <div className='header' >
            <img className='img-header' src={img1} alt='logo' />
        </div>
    )
}