const MapboxProjects = [
    {
        url:'https://davincikab.github.io/cycle_routes/',
        description:'',
        title:'Cycling Routes: MasCiclo',
        tags:['mapbox'],
        image:'/images/mapbox/cycle_routes.jpg'
    },
    {
        url:'https://mappingcolonialbelgium.com/',
        // url:'https://davincikab.github.io/colonial_map/',
        description:'',
        title:'Mapping Colonial Belgium',
        tags:["mapbox"],
        image:'/images/mapbox/colonial_image.jpg'

    },
    {
        url:'https://davincikab.github.io/mission_filled/',
        description:'',
        title:'Church Mission Centers',
        tags:["Mapbox"],
        image:'/images/leaflet/church.jpg'
    },
    {
        url:'https://davincikab.github.io/layer_control/',
        description:'',
        title:'Layer Control',
        tags:['mapbox'],
        image:'/images/mapbox/layer_control.jpg'
    },
    {
        url:'https://davincikab.github.io/proportional_symbol/',
        description:'',
        title:'Proportional Symbol Map',
        tags:['mapbox'],
        image:'/images/mapbox/prop_symbol.jpg'
    },
    {
        url:'https://davincikab.github.io/airbase/',
        description:'',
        title:'Airbase Monitoring Simulation (Game)',
        tags:['mapbox'],
        image:'/images/mapbox/airbase_map.jpg'
    },
    {
        url:'https://davincikab.github.io/mapbox_clustering/',
        description:'',
        title:'Mapbox Clustering',
        tags:['mapbox'],
        image:'/images/mapbox/mapbox_clustering.jpg'
    },
    {
        url:'https://davincikab.github.io/fairfax_districts/',
        description:'',
        title:'Static Map on FairFax Districts',
        tags:['static', 'mapbox', 'labelling'],
        image:'/images/mapbox/fairfax_map.jpg'
    }
];

const LeafletProjects = [
    {
        url:'https://davincikab.github.io/leaflet_imageoverlay/',
        description:'',
        tags:['leaflet'],
        title:'Fantasy Map',
        image:'/images/leaflet/game_extra_zoom.jpg'
    },
    {
        url:'https://davincikab.github.io/drill-in/',
        description:'',
        tags:['leaflet'],
        title:'Drill In Map',
        image:'/images/leaflet/popup_drill.jpg'
    },
    {
        url:'https://davincikab.github.io/drill-in/',
        description:'',
        tags:['leaflet'],
        title:'GTA Map',
        image:'/images/leaflet/gta_map.jpg'
    },
    {
        url:'https://www.awoberlin.de/mitmachen/freiwilligendienste-2/#map',
        description:'',
        title:'Voluntary Services Map',
        tags:['leaflet'],
        image:'/images/leaflet/voluntary_services.jpg'
    },
    {
        url:'https://davincikab.github.io/turf_buffers/',
        description:'',
        title:'Turf Buffer Feature',
        tags:['leaflet'],
        image:'/images/leaflet/turf_buffer.jpg'
    },
    {
        url:'https://davincikab.github.io/chicagoChoropleth/',
        description:'',
        title:'Choropleth Map',
        tags:['leaflet', 'choropleth'],
        image:'/images/leaflet/choropleth_map.jpg'
    },
];

const GoogleMapsProjects = [
    {
        url:'https://davincikab.github.io/googlemaps_filter/',
        description:'',
        title:'Google Map Custom Filter',
        tags:['google maps'],
        image:'/images/googlemaps/google_filter.jpg'
    },
];

const OpenLayersProjects = [

];

const mapStyles = {
    mapbox:[
        {
            style:'Purple',
            image:'/images/styles/mapbox/purple_map.jpg'
        },
        {
            style:'Pencil Silver',
            image:'/images/styles/mapbox/mapbox_light.jpg'
        },
        {
            style:'Natural',
            image:'/images/styles/mapbox/natural_image.jpg'
        },
        {
            style:'Nara',
            image:'/images/styles/mapbox/nara_one_image.jpg'
        },
        {
            style:'Mint Green',
            image:'/images/styles/mapbox/mint_green.jpg'
        },
        {
            style:'Light Map',
            image:'/images/styles/mapbox/light_map.jpg'
        },
        {
            style:'Light Blue',
            image:'/images/styles/mapbox/light_blue.jpg'
        },
        // {
        //     style:'Light Map',
        //     image:'/images/styles/mapbox/light_map.jpg'
        // }
    ]
};

const D3jsProjects = [
    {
        url:'https://davincikab.github.io/D3map/',
        description:'Lorem Ipsum',
        title:'Project Locator',
        tags:['d3js', 'filter'],
        image:'/images/d3js/project_locator.jpg'
    },
]

let webMaps = [...MapboxProjects, ...LeafletProjects, ...GoogleMapsProjects, ...D3jsProjects]

export { webMaps, mapStyles }

