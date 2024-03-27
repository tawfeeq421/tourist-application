
import "./citycard.css"

function Citycard(props)
{
    return<div id="parent">
        <section style={{ backgroundImage:`url(${props.bgimage})`}}>
            <span>Things To Do In</span>
            <h3>{props.cityname}</h3>

        </section>

        <section>
            <p>{props.text}</p>

            <div id="roundimg">
                <img src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/8e292157ff43ca21650bd912ebaae19c"/>
                <img  className="secimg" src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/77b975d0755f4c7e267b7887b65557ca"/>
                <span className="round3">+35</span>

                <button>Explore 34 toures</button>
            </div>
            
        </section>


    </div>
}
export default Citycard;