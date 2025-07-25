import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AuraPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    
                        {/* <h2 id='responsive-text-project-heading'> SpecksDesk
                        </h2> */}
                     <label id='responsive-text-project-title'
                     ><span className="ltn__secondary-color" style={{justifyItems:"center"}}><img src='assets/img/Allimgs/pin.png' /></span>Downtown, Dubai, United Arab Emirates</label> 
                        {/* <h4 className="title-2">Estatehouse</h4>
                        <p>Nestled within a scenic landscape, our double-sized house layout offers an enriched ecosystem and enhanced security. Planned around the natural contours, each residence enjoys privacy while fostering community engagement through landscaped areas, footpaths, and street lights.</p>
                        <p>Residents also have access to a clubhouse featuring amenities such as a pool, indoor game area, and gym. These facilities provide opportunities for fun, stress relief, and quality time with loved ones.</p>
                        {/* <p>Magnanimous First of its kind :-
                        It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.
                        </p> */}
                        <p id='responsive-text-project-title'>1-Bedroom Apartment Interior Design in Downtown, Dubai
                        </p>
                        <p id='responsive-text-project-title'>This 1-bedroom apartment interior design in Dubai features a warm, neutral palette with modern finishes. The open plan layout maximizes compact living space, while layered textures and curated décor add personality. A turnkey interior solution tailored for contemporary city living, blending comfort, functionality, and minimalist style.

                        </p>
                        {/* <h4 className="title-2">Property Detail</h4>   */}
                        {/* <div className="property-detail-info-list section-bg-1 clearfix mb-60">                           */}
                        {/* <ul>
                            <li><label>Area :</label> <span>3760 sq. ft</span></li>
                            <li><label>Location </label> <span> Mangaluru, Karnataka</span></li>
                            <li><label>Scope :</label> <span>Design Visualisation</span></li>
                            
                        </ul> */}
                        {/* <ul>
                            <li><label>Lot Area:</label> <span>HZ29 </span></li>
                            <li><label>Lot dimensions:</label> <span>120 sqft</span></li>
                            <li><label>Beds:</label> <span>7</span></li>
                            <li><label>Price:</label> <span>2</span></li>
                            <li><label>Property Status:</label> <span>For Sale</span></li>
                        </ul> */}
                        {/* </div> */}
                        

                        <div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-8">
    <a>
                                <img className="mb-30" src={publicUrl+"assets/img/updatates/project/Aura.jpg"} alt="Image" style={{height:'90%',width:'100%'}}/>
                            </a>

    </div>
   
</div>
</div>
{/* <h4 className="title-2"  id='responsive-text-project-heading'>Branding In Interior Design</h4>

<p  id='responsive-text-project-title'>The vision of the eyewear brand was to bring dynamic eyewear designs that are not just for the present but the future too. 
                        </p>

                        <p   id='responsive-text-project-title'>The space required to be designed was a narrow long space. It needed to be broken down into smaller sections. The futuristic vision of the brand as well as the requirement of the space gave rise to the introduction of curves in the design. The curves broke the homogeneity of the space as well as it created pockets for displaying different ranges of eyewear. It guides the movement of the user. 
                        </p>
                        <p   id='responsive-text-project-title'>Movement being an element of futurism, is also a metaphor for forward motion.
 
                        </p> */}
                        {/* <div className="col-md-12" style={{display:'flex',justifyContent:'center'}}> */}
                            {/* <a href={publicUrl+"assets/img/Allimgs/Picture90.webp"} data-rel="lightcase:myCollection"> */}
                                {/* <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture90.webp"} alt="Image" /> */}
                            {/* </a> */}
                            {/* <a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
                            </a> */}
                            {/* </div> */}
{/* 
                            <h4 className="title-2"   id='responsive-text-project-heading'>Central Axis /Balance
                            </h4> */}

{/* <p   id='responsive-text-project-title'>At the central axis, the billing desk takes a deliberate departure from this fluidity. It provides a counterbalance to the dynamic surroundings, creating a sense of stability and order  </p>
                        <p id='responsive-text-project-title' >This intentional contrast ensures that customers intuitively identify the transaction area, while also serving the functional need of a flat, stable surface essential for efficient transactions.   
 
                        </p>
                        <p  id='responsive-text-project-title'>Placement at the central axis enhances accessibility, making it a focal point for both customers and staff.

 
                        </p> */}


                        {/* <div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-10">
   
    <a>
                                <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="Image" />
                            </a>
    </div>
   
</div>
</div> */}

{/* <h4 className="title-2"   id='responsive-text-project-heading'>Visual Merchandising & Consumer Behaviour.

</h4> */}

{/* <p id='responsive-text-project-title' >Our research on Visual merchandising and impact on consumer behaviour , aimed to create a storefront that captures the interest of those passing by</p>
<p id='responsive-text-project-title'>The customers are enticed with a door handle which resembles a ‘spectacle’ . the use of glass partition, compels them to step inside where the immersive visual experience unfolds.  The store handle is Modern materials like glass and metal used, contribute to a sophisticated aesthetic


</p> */}
<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
    {/* <a href={publicUrl+"assets/img/Allimgs/Picture94.webp"} data-rel="lightcase:myCollection"> */}
                                <img className="mb-30" src={publicUrl+"assets/img/updatates/project/Aura1.jpg"} alt="Image" />
                            {/* </a> */}

    </div>
   
    <div className="col-md-4">
    {/* <a href={publicUrl+"assets/img/Allimgs/Picture93.webp"} data-rel="lightcase:myCollection"> */}
                                <img className="mb-30" src={publicUrl+"assets/img/updatates/project/Aura2.jpg"} alt="Image" />
                            {/* </a> */}
                        

    </div>
   
    <div className="col-md-4">
    {/* <a href={publicUrl+"assets/img/Allimgs/Picture92.webp"} data-rel="lightcase:myCollection"> */}
                                <img className="mb-30" src={publicUrl+"assets/img/updatates/project/Aura5.jpg"} alt="Image" />
                            {/* </a> */}

    </div>
   
</div>
</div>

                        {/* <h4 className="title-2" id='#responsive-text-project-heading '>From Our Gallery</h4> */}
                        <div className="ltn__property-details-gallery mb-30">
                        <div className="row">
                            <div className="col-md-10" id="responsive-text-project-heading">
                            {/* <a>
                                <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture89.webp"} alt="Image" style={{height:'90%',width:'100%'}}/>
                            </a> */}
                            {/* <a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
                            </a> */}
                            </div>
                            {/* <div className="col-md-6">
                            <a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
                            </a>
                            </div> */}


{/* <h4 className="title-2"  id='responsive-text-project-heading'>Branding In Interior Design</h4>

<p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The vision of the eyewear brand was to bring dynamic eyewear designs that are not just for the present but the future too. 
                        </p> */}
                        {/* <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The space required to be designed was a narrow long space. It needed to be broken down into smaller sections. The futuristic vision of the brand as well as the requirement of the space gave rise to the introduction of curves in the design. The curves broke the homogeneity of the space as well as it created pockets for displaying different ranges of eyewear. It guides the movement of the user. 
                        </p>
                        <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>Movement being an element of futurism, is also a metaphor for forward motion.
 
                        </p> */}
                      






                            {/* <h4 className="title-2"   id='responsive-text-project-heading'>Central axis /Balance
                            </h4>

<p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>At the central axis, the billing desk takes a deliberate departure from this fluidity. It provides a counterbalance to the dynamic surroundings, creating a sense of stability and order  </p>
                        <p id='responsive-text-project-title' className="col-lg-10 col-md-12">This intentional contrast ensures that customers intuitively identify the transaction area, while also serving the functional need of a flat, stable surface essential for efficient transactions.   
 
                        </p>
                        <p className="col-lg-10 col-md-12" id='responsive-text-project-title'>Placement at the central axis enhances accessibility, making it a focal point for both customers and staff.

 
                        </p> */}
                        <div className="col-md-10" id="responsive-text-project-heading">
                            {/* <a>
                                <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="Image" />
                            </a> */}
                            {/* <a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
                            </a> */}
                            </div>



{/* 
                            <h4 className="title-2"   id='responsive-text-project-heading'>Visual Merchandising & Consumer Behaviour.

                            </h4>

<p id='responsive-text-project-title' className="col-lg-10 col-md-12">Our research on Visual merchandising and impact on consumer behaviour , aimed to create a storefront that captures the interest of those passing by</p>
                        <p id='responsive-text-project-title' className="col-lg-10 col-md-12">The customers are enticed with a door handle which resembles a ‘spectacle’ . the use of glass partition, compels them to step inside where the immersive visual experience unfolds.  The store handle is Modern materials like glass and metal used, contribute to a sophisticated aesthetic
  
 
                        </p> */}

 
                        <div className="col-md-3" id="responsive-text-project-heading">
                            {/* <a href={publicUrl+"assets/img/Allimgs/Picture92.webp"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture92.webp"} alt="Image" />
                            </a> */}
                            
                            </div>
                        <div className="col-md-3">
                        
                            {/* <a href={publicUrl+"assets/img/Allimgs/Picture93.webp"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture93.webp"} alt="Image" />
                            </a>
                         */}
                            </div>
                        <div className="col-md-3">
                            
                            {/* <a href={publicUrl+"assets/img/Allimgs/Picture94.webp"} data-rel="lightcase:myCollection">
                                <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture94.webp"} alt="Image" />
                            </a> */}
                            </div>


                        </div>
                        </div>
                        
                        
                        
                        
                    
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                        {/* Author Widget */}
                        
                        {/* Search Widget */}
                        
                        {/* Form Widget */}
                        
                        {/* Top Rated Product Widget */}
                    
                        {/* Menu Widget (Category) */}
                        
                        {/* Popular Product Widget */}
                        
                        {/* Popular Post Widget */}
                        
                        {/* Social Media Widget */}
                        {/* <div className="widget ltn__social-media-widget">
                        <h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
                        <div className="ltn__social-media-2">
                            <ul>
                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                            <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                            </ul>
                        </div>
                        </div> */}
                        {/* Tagcloud Widget */}
                        
                        {/* Banner Widget */}
                        {/* <div className="widget ltn__banner-widget d-none go-top">
                        <Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
                        </div> */}
                    </aside>
                    </div>
                </div>
                </div>
            </div>
        }
}

export default AuraPage