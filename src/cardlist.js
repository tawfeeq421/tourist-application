

import "./cardlist.css";
import Citycard from "./citycard";

function Cardlist(props){
    return<div id="list">
         <Citycard  cityname="Hyderabad" text="Going to Hyderabad and wondering what to do? No need to worry, there’s plenty of things to do in Hyderabad with a local." bgimage="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_400/b2b6b12709dd9420cb17599242bfaf95"/>
         <Citycard  cityname="Nagpur"    text="Going to Nagpur and wondering what to do? No need to worry, there’s plenty of things to do in Nagpur with a local." bgimage="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_400/36d5b9336c20d148f6616f9348ebc9bd"/>
         <Citycard  cityname="Mumbai" text="Going to Mumbai and wondering what to do? No need to worry, there’s plenty of things to do in Mumbai with a local." bgimage="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_400/45b7e5c754238bd646de177ac2425bc7"/>
         <Citycard  cityname="kolkata" text="Going to Kolkata and wondering what to do? No need to worry, there’s plenty of things to do in Kolkata with a local." bgimage="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_400/012a279e3da0775bd8212b492ec34c4f"/>
         <Citycard  cityname="Pune" text="Going to Pune and wondering what to do? No need to worry, there’s plenty of things to do in Pune with a local." bgimage=""/>
       
        
         



    </div>
}
export default Cardlist;