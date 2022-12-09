import { useState, useEffect } from "react";
import { webMaps, mapStyles } from "../mocks/projects";

const ProjectsSection = (props) => {
    const libraries = ['Mapbox', 'Leaflet', 'OpenLayers', 'Google Maps', 'D3js'];
    const years = [2020, 2021, 2022];

    const [state, setState] = useState({
        library:'',
        year:'',
        activeMapStyle:mapStyles.mapbox[0]
    });

    const onChange = (evt) => {
        let { name, value } = evt.target;

        setState({
            ...state,
            [name]:value.toLocaleLowerCase().trim()
        });
    }

    const onClick = (item) => {
        setState({
            ...state,
            activeMapStyle:{...item}
        })
    }

    const resetFilter = () => {

        setState({
            ...state,
            library:"",
            year:"",
        })
    }

    const renderCard = (item, index) => {
        let id = 230 + index;

        return (<div className="card" key={index}>
            {/* <img className="card-image" src={`https://picsum.photos/id/${id}/720/360`} alt={item.title} /> */}
            <img className="card-image" src={item.image} alt={item.title} />
            <a href={item.url} className="card-title" _blank="">{item.title}</a>

            <div className="tags">
                {item.tags.map((tag,ind) => <div className="tag" key={ind} >{tag}</div>)}
            </div>
        </div>
        )
    }

    let { year, library, activeMapStyle } = state;
    console.log(library);

    let activeMaps = library !== "" ? webMaps.filter(map => map.tags.includes(library)) : [...webMaps];

    return (
        <div className="project-section section" id="projects">
            <h1 className="section-title">PROJECTS</h1>
            <hr></hr>

            <div className="section-body my-5">
                {/* Project filters */}
                <div className="filters">
                    <div className="form-group">
                        <div className="label">Year</div>
                        <select className="form-control" id="year" name="year" onChange={onChange}>
                            {years.map(year => <option value={year} key={year} >{year}</option>)}
                        </select>
                    </div>

                    <div className="form-group">                   
                        <div className="label">Mapping Library</div>
                        <select className="form-control" id="library" name="library" onChange={onChange}>
                            {libraries.map(library => <option value={library}  key={library} >{library}</option>)}
                        </select>
                    </div> 

                    {
                        library && <button className="btn" onClick={resetFilter}> Reset Filter </button>
                    }

                </div>

                <div className="card-list">
                    {activeMaps.map((mp, index) => (
                        renderCard(mp, index)
                    ))}
                    

                    {/* <div className="card">
                        <img className="card-image" src="/images/mare_stats.jpg" alt="Image Title"/>
                    </div>

                    <div className="card">
                        <img className="card-image" src="/images/mare_stats.jpg" alt="Image Title"/>
                    </div> */}
                </div>
            </div>

            {/* styles section */}
            <div className="styles-section" id="styles-section">
                <h1 className="section-title">Mapbox Styles</h1>
                <hr></hr>
                
                <div className="my-5 styles-body">
                    <div className="style-viewer">
                        <img 
                            src={activeMapStyle.image} 
                            alt={activeMapStyle.style} 
                            className="img-viewer" 
                        />
                    </div>

                    <div className="section-styles">
                        {mapStyles.mapbox.map((item, key) => {
                            return (
                            <div 
                                className={activeMapStyle.style === item.style ? "style-item active" : "style-item"} 
                                key={key} 
                                onClick={e => onClick(item)}
                            >
                                <img src={item.image} alt={item.style} className="img-style" />
                                <div className="caption">{item.style}</div>
                            </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );

}


export default ProjectsSection;