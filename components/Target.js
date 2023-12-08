// Registering component in Target.js

AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 200 + (-200));      
        var posY = (Math.random() * 5 + (-1));
        var posZ = (Math.random() * 200 + (-200));
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      
      ringEl.setAttribute("material","color","#ff9100");
      
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 2 });   
  
      terrainEl.appendChild(ringEl);
    }
  });
  
  AFRAME.registerComponent("floating-fishes",{
    init: function(){
      for (var i = 1; i <= 20; i++) {
        var id = "bird"+i
  
        var posX =(Math.random() * 200 + (-200));      
        var posY = (Math.random() * 5 + (-1));
        var posZ = (Math.random() * 200 + (-200));
  
        var position = {x:posX,y:posY,z:posZ}
  
        this.birds(id,position)
      }
    },
  
    birds: function(id,position){
      var birdEl = document.createElement("a-entity")
      birdEl.setAttribute("id",id)
      birdEl.setAttribute("position",position)
      birdEl.setAttribute("gltf-model","./assets/models/fish/scene.gltf")
      birdEl.setAttribute("animation-mixer",{})
      birdEl.setAttribute("scale", {x:1,y:1,z:1})
      var terrainEl = document.querySelector("#terrain")
      terrainEl.appendChild(birdEl)
    }
  })