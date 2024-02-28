import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Searchbox from './searchbox.js';
import { faChevronLeft, faChevronRight, faLocation, faLocationDot, faMagnifyingGlass, faMapLocation }from "@fortawesome/free-solid-svg-icons"
import {useState,useEffect,useRef} from 'react';

class Place{
    name;
    images;
    constructor(n,images){
       this.name=n;
       this.images=images;
    }
}


function Header(){
   
   const [searchbox,open]=useState(false)

    const [index,setIndex]=useState(0);
    const [places,setPlaces]=useState([]);


    const r1=useRef();
    const searchbtn=useRef();
    
    useEffect(()=>{
         setPlaces([
            new Place('Nagpur',[
                                'https://www.nagpuroranges.com/wp-content/uploads/futala-1024x683.jpg',
                                'https://1.bp.blogspot.com/_0wRJjXvyZ1I/TGhr-W2hWSI/AAAAAAAAFSE/jmfbyN204Ss/s400/MOSQUE1.jpg',
                                'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/deekshabhoomi.jpg',
                                'https://www.citywoofer.com/blog/wp-content/uploads/2021/08/6.jpg',
                                'https://www.cookwithmanali.com/wp-content/uploads/2016/10/Karachi-Halwa-Bombay-Halwa-150x227.jpg'
                              ]),
            new Place('Hyderabad',[
                                'https://www.earthsattractions.com/wp-content/uploads/2018/05/Charminar.jpg',
                                'https://5.imimg.com/data5/ANDROID/Default/2022/12/YE/BR/IT/34464417/product-jpeg-500x500.jpg',
                                'https://imgcld.yatra.com/ytimages/image/upload/v1433751872/Hyderabad_44.jpg',
                                'https://images.news9live.com/wp-content/uploads/2023/02/durgamcheruvu.jpg?w=1200&enlarge=true',
                                'https://cdn.tasteatlas.com/images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?mw=1300'
                              ]),

            new Place('Mumbai',[
                                   'https://th.bing.com/th/id/OIP.BlGoXR_8vgAJ4TzIXeJSbQHaJQ?rs=1&pid=ImgDetMain',
                                   'https://cdnewmoda.expatwoman.com/s3fs-public/styles/full_width/public/The-Taj.png?itok=_fcXd7w4',
                                   'https://farm3.staticflickr.com/2881/8790988938_78f681485c_b.jpg',
                                   'https://i0.wp.com/roadlesstravelled.me/wp-content/uploads/2016/12/Crystal-Beach-Resort-2.jpg?fit=683%2C1024&ssl=1',
                                   'https://www.holidify.com/images/cmsuploads/compressed/16021403586_64d59f2b7f_b_20200117222907.jpg',

                                
            
                                 ]),

            new Place('Kolkata',[
                                   'https://www.elginhotels.com/wp-content/uploads/2020/03/howrah_bridge02.png',
                                   'https://www.templedarshanyatri.com/images/varanasi.png',
                                   'https://th.bing.com/th/id/R.bed83eda058769ca6264428f6a0e4cca?rik=zZG2%2bjl6Bf9m5Q&riu=http%3a%2f%2faatmnirbharblog.com%2fwp-content%2fuploads%2f2022%2f10%2fcropped-diwali-2022-dates-1.jpg&ehk=QUaynIHnKl%2bsO4mNP8a9nxPur1ZKWHrsoPf7coEadfY%3d&risl=&pid=ImgRaw&r=0',
                                   'https://wallpapercave.com/wp/wp8783181.jpg',
                                   'https://www.quicklly.com/images/food/food_image/bengali_food/rasgulla.png',

                                
            
                                 ])
         ]);
    },[])
    
    
    return<div>
    <div id="box">
            <img src="https://global-uploads.webflow.com/5d98599ba491dd290226f10f/6181f6f0ae433018ad196c5f_withlocals.png"/>
            
            <section>
            
                <span style={{ margin:"2%"}}>Buy a gift Voucher</span>
                <button>Log in</button>
                <button style={{color:"red"}}>Sign up</button>
            </section>
    </div>


    <div id="location">

        <section id="sec1">
            <div>
                <span>Enchanting experiences,with incredibale local</span>
            </div>

            <div>
                <span>Book unique and memorable travel experiences guided by locals</span>
            </div>
            
            
           

     <div class='search-field' ref={r1} onClick={()=>open(!searchbox)}>
             <input  type='text' class='input'  placeholder='Where are you going ?'  onClick={()=>{
                    searchbtn.current.children[1].innerHTML='';
                    searchbtn.current.style.minWidth='fit-content';
                    searchbtn.current.style.padding='10px 20px 10px 20px';
                    r1.current.style.border='1px solid red'
                   
             }}
              onBlur={()=>{
                searchbtn.current.children[1].innerHTML='Search';
                searchbtn.current.style.minWidth='20%';
                searchbtn.current.style.padding='0.5em';
                r1.current.style.border=''
              }}
             
             />

             <button ref={searchbtn} class='search-btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <span>Search</span>
             </button>
     </div>
      
       <div className='search' style={{display:(searchbox)?"block":"none"}}><Searchbox/></div>
             
        </section>



           <section id="sec2">
           {   places.length&&
               places[index].images.map((image)=><div class="item"><img src={image} /></div>)  //ye div repeat ho raha hai 5 times
           }
            </section>

        

    </div>
     
    <div id="btn">

    <button class="btn"><FontAwesomeIcon icon={faChevronLeft} onClick={()=>{
                 setIndex((current)=>current>0?current-1:current);
             }}  /></button>
    <div id='loc'><FontAwesomeIcon icon={faLocationDot}/>{places.length&&places[index].name}</div>
    <button class="btn"><FontAwesomeIcon icon={faChevronRight}  onClick={()=>{
              setIndex((current)=>current<places.length-1?current+1:current);
    }}/></button>

    </div>


    </div>
    
}
export default Header;