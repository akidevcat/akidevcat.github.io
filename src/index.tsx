import React from 'react';
import { render } from 'react-dom';
import { Scrollbar } from "react-scrollbars-custom";
import './styles/index.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { Tooltip, Toast } from 'bootstrap'
import Background from './components/Background';
import * as THREE from 'three';

render(
  <React.StrictMode>
    <App />
    <Background/>
  </React.StrictMode>,
  document.getElementById('root')
);

// Enable bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  var tooltip = new Tooltip(tooltipTriggerEl);
  tooltip.show();
  return tooltip;
});

var tjsr = document.getElementById("introduction-render");

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( 400, 400 );
renderer.setPixelRatio( window.devicePixelRatio );

const stage_t = 2.0;
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 40, 1.0, 1, 100 );
camera.position.set( 0, 0, 3 );
scene.add( camera );

const geom_box = new THREE.BoxGeometry( 1, 1, 1 );
const geom_edges = new THREE.EdgesGeometry( geom_box );

var dots_material = new THREE.PointsMaterial( { color: 0xffffff, size: 1, sizeAttenuation: false, transparent: true } );
var lines_material = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true } );
var faces_material = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true } );
var standard_material = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, metalness: 0.0, roughness: 1.0 });

var scene_clock = new THREE.Clock(true);

const lightA = new THREE.PointLight(0xe22957, 1.0, 20.0)
//const lightB = new THREE.PointLight(0xffffff, 3.0, 20.0)
lightA.position.set(0, 0, 5);
//lightB.position.set(-5, -5, -5);

const cube_dots = new THREE.Points( geom_box, dots_material );
const cube_lines = new THREE.LineSegments( geom_edges, lines_material );
const cube_faces = new THREE.Mesh( geom_box, faces_material);
const cube_standard = new THREE.Mesh(geom_box, standard_material);

const cube_stages = [cube_dots, cube_lines, cube_standard];

scene.add(lightA);
//scene.add(lightB);

cube_stages.forEach(s => {
  scene.add(s);
});

renderer.domElement.id = "introduction-renderer";
tjsr!.appendChild(renderer.domElement);

renderer.render( scene, camera );

function animate() {
	requestAnimationFrame( animate );
  
  var t = scene_clock.getElapsedTime() % (stage_t * (cube_stages.length + 1));
  var si = Math.floor(t / stage_t);

  cube_stages.forEach((s, i) => {
    s.rotation.x += 0.01;
    s.rotation.y += 0.01;
    if (si >= cube_stages.length)
    {
      s.material.opacity = 1.0 - (t / stage_t - si);
    }
    else if (i < si) {
      s.material.opacity = 1.0;
    }
    if (i == si) {
      s.material.opacity = t / stage_t - si;
    }
    if (i > si) {
      s.material.opacity = 0.0;
    }
  });

	renderer.render( scene, camera );
}

animate();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
