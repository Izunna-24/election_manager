import style from "./index.module.css"
import illustration from "../../../asset/Illustration.png"
const Hero = () => {

    return (
        <>
            <div className={style.heroSection}>
                <div className={style.heroText}>
                    <h1>Cast Your Ballot <span style={{color:"#4caf4f", display:"block"}}>relax and monitor updates</span></h1>
                    <p>You want to creat an election and get real time seamless and secured voting process?</p>
                    <button style={{color:"white", background:"#4caf4f", border:"none", borderRadius: "5px", padding:"15px 30px"}}>
                        Register
                    </button>
                </div>
                <img src={illustration} className={style.heroImage} alt="Illustration"/>
            </div>
        </>
    )
}
export default Hero;