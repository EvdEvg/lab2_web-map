var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_highway_lineshighway_2 = new ol.format.GeoJSON();
var features_highway_lineshighway_2 = format_highway_lineshighway_2.readFeatures(json_highway_lineshighway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_lineshighway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_lineshighway_2.addFeatures(features_highway_lineshighway_2);
var lyr_highway_lineshighway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_lineshighway_2, 
                style: style_highway_lineshighway_2,
                popuplayertitle: 'highway_lines — highway',
                interactive: false,
                title: '<img src="styles/legend/highway_lineshighway_2.png" /> highway_lines — highway'
            });
var format_highway_pointhighway_3 = new ol.format.GeoJSON();
var features_highway_pointhighway_3 = format_highway_pointhighway_3.readFeatures(json_highway_pointhighway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_pointhighway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_pointhighway_3.addFeatures(features_highway_pointhighway_3);
var lyr_highway_pointhighway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_pointhighway_3, 
                style: style_highway_pointhighway_3,
                popuplayertitle: 'highway_point — highway',
                interactive: false,
                title: '<img src="styles/legend/highway_pointhighway_3.png" /> highway_point — highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_1.setVisible(true);lyr_highway_lineshighway_2.setVisible(true);lyr_highway_pointhighway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_1,lyr_highway_lineshighway_2,lyr_highway_pointhighway_3];
lyr_building_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'addr:place': 'addr:place', 'shop': 'shop', 'name:ru': 'name:ru', 'amenity': 'amenity', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_lineshighway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'description': 'description', 'service': 'service', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'tunnel': 'tunnel', 'smoothness': 'smoothness', 'railway': 'railway', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', });
lyr_highway_pointhighway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'crossing': 'crossing', 'name:ru': 'name:ru', 'name': 'name', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'railway': 'railway', 'tower:type': 'tower:type', 'power': 'power', 'material': 'material', 'barrier': 'barrier', 'access': 'access', });
lyr_building_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'religion': 'TextEdit', 'training': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'addr:place': 'TextEdit', 'shop': 'TextEdit', 'name:ru': 'TextEdit', 'amenity': 'TextEdit', 'building:levels': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway_lineshighway_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'description': 'TextEdit', 'service': 'TextEdit', 'footway': 'TextEdit', 'ford': 'TextEdit', 'depth': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'oneway': 'TextEdit', 'tunnel': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'foot': 'TextEdit', 'surface': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', });
lyr_highway_pointhighway_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'bench': 'TextEdit', 'public_transport': 'TextEdit', 'bus': 'TextEdit', 'crossing': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'motorcar': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'railway': 'TextEdit', 'tower:type': 'TextEdit', 'power': 'TextEdit', 'material': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'addr:place': 'no label', 'shop': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_lineshighway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'description': 'no label', 'service': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'oneway': 'no label', 'tunnel': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', });
lyr_highway_pointhighway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'crossing': 'no label', 'name:ru': 'no label', 'name': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'railway': 'no label', 'tower:type': 'no label', 'power': 'no label', 'material': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_highway_pointhighway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});