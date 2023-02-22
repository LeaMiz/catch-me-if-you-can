function Creation() {
    let createMainSection = document.createElement('div');
    createMainSection.className = 'main'
    document.getElementById('container').append(createMainSection)


    let milieu = document.createElement('div')
    let main = document.getElementsByClassName("main")
     milieu.className = 'row justify-content-between'
   
    let ecranNoir = document.createElement("div")
     ecranNoir.className = 'ecranNoir'
    main[0].append(milieu,ecranNoir)
   
    let section = document.createElement("section")
    section.className = "section "
    document.getElementsByClassName("section")
    main[0].append(section)
    console.log(section)

   let row1 = document.createElement("div")
   row1.getElementsByClassName("row")
   row1.className = "row1"
   section.append(row1)
   row1.innerText = "Score"

   let row2 = document.createElement("div")
   row2.className = "row2"
   section.append(row2)
   row2.innerText = "Points to Next Level"

   let row3 = document.createElement("div")
   row3.className = "row3"
   section.append(row3)
   row3.innerText = "Level"


   let row4 = document.createElement("div")
   row4.className = "row4"
   section.append(row4)
   row4.innerText = "Missed Clicks"

   let row5 = document.createElement("div")
   row5.className = "row5"
   section.append(row5)
   row5.innerText = "Timer"

   let row6 = document.createElement("div")
   row6.className = "row6"
   section.append(row6)
   row6.innerText = "High Scores"




}

Creation()