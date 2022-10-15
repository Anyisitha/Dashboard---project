import './login.css'

// Imported Images
import Fondo1 from '../../../Assets/raya8.png'
import Fondo2 from '../../../Assets/raya6.png'
import Shapes from '../../../Assets/raya4.png'
import wave from '../../../Assets/raya5.png'
import wave1 from '../../../Assets/raya1.png'

const Login = () => {
    return (
        <div className="bodyLogin">
            <div className='page-leader'>
                <img className='path' src={Fondo1} alt="Fondo1" />
                <img className='path2' src={Fondo2} alt="Fondo2" />
                <img className='Shapes' src={Shapes} alt="Fondo3" />
                <img className='wave' src={wave} alt="Fondo4" />
                <img className='wave1' src={wave1} alt="Fondo5" />
            </div>
            <div className='maincontainer'>
                <h1 className='welcomeText'>Welcome</h1>
                <input type="text" className='InputContainer' placeholder='Email' style={{ marginBottom: 20 }} />
                <input type="password" className='InputContainer' placeholder='Password' />
                <button className='ButtomContainer'>Sign Up</button>
                <hr className='horizontalRule' />
                <a href="#" className='password'>Forgot Password</a>
            </div>
        </div>
    )  
}

export default Login;