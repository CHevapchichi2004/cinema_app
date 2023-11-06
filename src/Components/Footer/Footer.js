import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <ul className='links'>
                <li>Profile</li>
                <li>FAQ’s</li>
                <li>Pricing plans</li>
                <li>Order tracking</li>
                <li>returns</li>
            </ul>
            <ul className='links'>
                <li>recent posts</li>
                <li>Touch of uniqueness</li>
                <li>Offices you won’t forget</li>
                <li>Cicilan</li>
            </ul>
            <ul className='links'>
                <li>customer</li>
                <li>Help & contact us</li>
                <li>Return</li>
                <li>Online stores</li>
                <li>Terms & cordition</li>           
            </ul>
            <ul className='links'>
                <li>contacts</li>
                <li><i className='fa-brands fa-instagram'></i></li>
                <li><i className='fa-brands fa-telegram'></i></li>
                <li><i className='fa-brands fa-vk'></i></li>
            </ul>
        </footer>
    )
}

export default Footer