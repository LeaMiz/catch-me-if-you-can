//// 3 elements avec des class 

function include(file) {
      
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
      
    document.getElementsByTagName('head').item(0).appendChild(script);
      
    }
      
    /* Include Many js files */ 
    include('js/modules/createClickToStartSection.js');
    include("js/modules/createGameAreaSection.js")
   

  





	
   // function createStartToStartElement()
 
//let clickToStartRow = document.createElement('div');
      //  clickToStartRow.className = 'row'
      //  clickToStartRow.id = 'click-to-start';
     //   document.getElementById('container').append(clickToStartRow)
    
       // let ClickToStartColLeft = document.createElement('div')
       // ClickToStartColLeft.className = 'col'
    
       // let ClickToStartColMiddle = document.createElement('div')
      //  ClickToStartColMiddle.className = 'col-6 text-center btn btn-primary btn-lg btn-block'
      //  ClickToStartColMiddle.id = 'click-to-start-middle-column'
      //  ClickToStartColMiddle.innerHTML = 'CLICK TO START'
    
      //  let ClickToStartColRight = document.createElement('div')
     //   ClickToStartColRight.className = 'col'
    
      //  document.getElementById('click-to-start').append(ClickToStartColLeft)
      //  document.getElementById('click-to-start').append(ClickToStartColMiddle)
      //  document.getElementById('click-to-start').append(ClickToStartColRight)
  //  }
    
   // createStartToStartElement()
    

