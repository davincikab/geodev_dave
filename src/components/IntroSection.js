import imageOne from '../assets/images/choropleth_map.jpg';
import imageTwo from '../assets/images/dark_blue.jpg';
import imageThree from '../assets/images/mare_stats.jpg';

const IntroSection = (props) => {
    return (
        <div className="intro-section">
            <div className='img-section'>
                <img className="image-intro" src={imageTwo} alt="Basemap" />
                <img className="image-intro" src={imageOne} alt="Choropleth map" />
                <img className="image-intro" src={imageThree} alt="Stats map" />
            </div>


            <div className='username-section'>
                <h2>
                    David Njeri
                    <br></br>
                    GIS Web Developer
                </h2>
            </div>
        </div>
    );
}



export default IntroSection;