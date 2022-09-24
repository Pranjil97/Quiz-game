const start=document.getElementsByClassName("start")[0];
const box=document.getElementById("container")
const content=document.getElementsByClassName("content")[0];
let highscorenames=["PK"]
let finaldiv=document.createElement("div")
finaldiv.className="finaldiv"
box.appendChild(finaldiv)

let num=0;
let score=0;
let index=0;

function highscore(){
  let a=document.getElementsByClassName("content")[0];
  a.remove()
  content.remove()
  finaldiv.remove()
  const scorediv=document.createElement("div")
  score.className="content"
  box.appendChild(scorediv)
  const highscorehead=document.createElement("h4")
  highscorehead.innerText="Highscores"
  highscorehead.className="HighScores"
  scorediv.appendChild(highscorehead)
  let names=document.createElement("li")
  for(na of highscorenames){
    names.innerText= na+ "-" + score
    names.className="scorelist"
    scorediv.append(names)
  }
  let goback=document.createElement("button")
  goback.innerText="GO BACK"
  goback.className="high_btn1"
  scorediv.appendChild(goback)
  goback.addEventListener("click",()=>{
    scorediv.remove()
    box.appendChild(content)})
  let clearscore=document.createElement("button")
  clearscore.innerText="Clear Highscores"
  clearscore.className="high_btn2"
  scorediv.appendChild(clearscore)
  clearscore.addEventListener("click",()=>{names.remove()})
}

function startQuiz(){
    // start.remove()
    let sec=0;
    setInterval(()=>{
        document.getElementById("timestamp").innerText=sec;
        sec++;
    },1000)
    nextquestion()
    // for(i=0;i<questions.length;i++){
      // i = index;
      // console.log(questions[i].questionText)
      // let quests=document.createElement("h4")
      // quests.innerText=questions[i].questionText
      // quests.className = "newheading"
      // box.appendChild(quests)
      //   let option=questions[i].options
      //   let answer=questions[i].answer
      //   for(j=0;j<option.length;j++){
      //       let serial=option[j]
      //       let label=document.createElement("div")
      //       label.innerText= serial
      //       label.className="label"
      //       // label.addEventListener("click")
      //       box.appendChild(label)
      //       console.log(serial)
      //   }
      //   let line=document.createElement("div")
      //   line.className="bl"
      //   box.appendChild(line)
      //   let next_btn=document.createElement("button")
      //   next_btn.className="start"
      //   next_btn.innerText="Next"
      //   box.appendChild(next_btn)
      //   next_btn.addEventListener("click",nextquestion)
      //   index+=1;
        // console.log(answer)
    // }
}

function nextquestion(){
    i = index;
    content.remove()
    let newcontent=document.createElement("div")
    newcontent.className="content"
    console.log(newcontent)
    box.appendChild(newcontent)
    console.log(questions[i].questionText)
    let quests=document.createElement("h4")
    quests.innerText=questions[i].questionText
    quests.className = "newheading"
    newcontent.appendChild(quests)
      let option=questions[i].options
      let answer=questions[i].answer
      for(j=0;j<option.length;j++){
          let serial=option[j]
          let label=document.createElement("div")
          label.innerText= serial
          label.className="label"
          label.addEventListener("click",()=>{
            if(label.innerText===answer){
              let correct=document.createElement("div")
              correct.innerText="Correct!"
              correct.className="correct"
              newcontent.appendChild(correct)
              score+=20;
          }else{
              let incorrect=document.createElement("div")
              incorrect.innerText="Incorrect!"
              incorrect.className="incorrect"
              newcontent.appendChild(incorrect)
              score-=20;
          }
        })
        newcontent.appendChild(label)
        console.log(serial)
        console.log(score)
    }
    let line=document.createElement("div")
    line.className="bl"
    newcontent.appendChild(line)
    let next_btn=document.createElement("button")
    next_btn.className="start"
    next_btn.innerText="Next"
    newcontent.appendChild(next_btn)
    console.log(answer)
    index+=1;
    next_btn.addEventListener("click",()=>{
      if(index<questions.length){
        newcontent.remove()
        console.log(index)
        nextquestion() 
      }else{
        newcontent.remove()
        console.log("ALL DONE 2")
        let done=document.createElement("h2")
        done.innerText="All Done!"
        done.className="done"
        finaldiv.appendChild(done)
        let finalp=document.createElement("p")
        finalp.className="finalp"
        finalp.innerText="Your final score is " + score +"."  
        finaldiv.appendChild(finalp)
        let name=document.createElement("input")
        name.id="nameinput"
        name.type="text"
        name.className="name"
        finaldiv.appendChild(name)
        let finalp2=document.createElement("p")
        finalp2.innerText="Enter initials: "
        finalp2.className="finalp2"
        finaldiv.appendChild(finalp2)
        const finalbt=document.createElement("button")
        finalbt.className="finalbt"
        finalbt.innerText="Submit"
        finaldiv.appendChild(finalbt)
        finalbt.addEventListener("click",()=>{
          let inputname=document.getElementById("nameinput").value;
          alert("Successfully Submitted")
          highscorenames.push(inputname)
          console.log(highscorenames)
          console.log(inputname)
        })
      }
    })
}

start.addEventListener("click",startQuiz)

const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];
  
  
  