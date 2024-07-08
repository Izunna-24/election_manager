import logo from './../../asset/ELECT.png';
import style from './index.module.css';

const NavBar = () => {

    return (
       <>
           <div className={style.nav}>
               <div style={{display: "flex", alignItems: "center"}}>
                   <img src={logo} alt="logo"/>
                   <h2 style={{color: "#263238", fontSize: "30px"}}>ElectPro</h2>
               </div>

               <div className={style.midSection}>
                   <p>Welcome</p>
                   <p>About Us</p>
                   <p>Login</p>
                   <p>FAQs</p>
               </div>

           </div>
           </>
    )
}


export default NavBar;