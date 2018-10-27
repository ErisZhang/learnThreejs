import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from './OBJLoader';
import MTLLoader from './MTLLoader';
import obj from "./IronMan.obj";
import mtl from "./IronMan.mtl";
OBJLoader(THREE);
MTLLoader(THREE);

class Mesh extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    

    this.camera.position.z = 250

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    this.cube = new THREE.Mesh(geometry, material)
    // this.scene.add(this.cube)

    // hack here
    this.THREE = THREE;

    
    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);
    
    var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);
    
    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();
    
    this.scene.add(keyLight);
    this.scene.add(fillLight);
    this.scene.add(backLight);

    let self = this;

    var mtlLoader = new this.THREE.MTLLoader();
    mtlLoader.setTexturePath('./');
    mtlLoader.setPath('./');

    mtlLoader.load(mtl, (materials) => {
      materials.preload();

      var objLoader = new this.THREE.OBJLoader();

      objLoader.setMaterials(materials);
      
      objLoader.load(obj, (object) => {
        console.log(object);
        self.scene.add(object);
        object.position.y -= 100;
        self.renderer.render(self.scene, self.camera);
      })
    })

  }

  render(){
    return(
      <div
        style={{ width: '800px', height: '600px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Mesh;