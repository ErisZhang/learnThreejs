import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

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
    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
    this.renderer.render(this.scene, this.camera)
    // var loadingManager = new THREE.LoadingManager();
    // var loader = new THREE.ColladaLoader(loadingManager);

    // let self = this;
    // loader.load(
    //   // resource URL
    //   './medium_mesh_striker/scene.gltf',
    //   // called when the resource is loaded
    //   function ( gltf ) {
    
    //     self.scene.add( gltf.scene );
    
    //     // gltf.animations; // Array<THREE.AnimationClip>
    //     // gltf.scene; // THREE.Scene
    //     // gltf.scenes; // Array<THREE.Scene>
    //     // gltf.cameras; // Array<THREE.Camera>
    //     // gltf.asset; // Object
    //     console.log("reach here");
    //   },
    //   // called while loading is progressing
    //   function ( xhr ) {
    
    //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
    //   },
    //   // called when loading has errors
    //   function ( error ) {
    
    //     console.log( 'An error happened' );
    
    //   }
    // );

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