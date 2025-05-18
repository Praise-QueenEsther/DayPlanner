const events = [
    { id: 1, title: "Project Kickoff", start: "2025-01-05", end: "2025-01-05", description: "Initial project meeting" },
    { id: 2, title: "Team Building", start: "2025-01-12", end: "2025-01-12", description: "Outdoor activities with team" },
    { id: 3, title: "Sprint Planning", start: "2025-01-20", end: "2025-01-21", description: "Plan tasks for sprint 1" },
    { id: 4, title: "Code Freeze", start: "2025-02-01", end: "2025-02-01", description: "No more code changes" },
    { id: 5, title: "Client Demo", start: "2025-02-07", end: "2025-02-07", description: "Show progress to client" },
    { id: 6, title: "Design Review", start: "2025-02-14", end: "2025-02-14", description: "Review UI/UX designs" },
    { id: 7, title: "Hackathon", start: "2025-03-01", end: "2025-03-02", description: "48h coding marathon" },
    { id: 8, title: "Quarterly Planning", start: "2025-03-15", end: "2025-03-15", description: "Q2 Planning Meeting" },
    { id: 9, title: "Team Offsite", start: "2025-03-25", end: "2025-03-27", description: "Trip with team for bonding" },
    { id: 10, title: "Release v1.0", start: "2025-04-05", end: "2025-04-05", description: "Launch first version" },
    { id: 11, title: "Webinar", start: "2025-04-10", end: "2025-04-10", description: "Live product showcase" },
    { id: 12, title: "Tax Filing", start: "2025-04-15", end: "2025-04-15", description: "Submit tax documents" },
    { id: 13, title: "Performance Reviews", start: "2025-04-20", end: "2025-04-24", description: "Employee evaluations" },
    { id: 14, title: "May Day Holiday", start: "2025-05-01", end: "2025-05-01", description: "Public holiday" },
    { id: 15, title: "New Hire Orientation", start: "2025-05-06", end: "2025-05-06", description: "Welcome new team" },
    { id: 16, title: "Security Audit", start: "2025-05-12", end: "2025-05-13", description: "Infrastructure audit" },
    { id: 17, title: "Database Migration", start: "2025-05-20", end: "2025-05-21", description: "Move to new DB system" },
    { id: 18, title: "Team Picnic", start: "2025-06-01", end: "2025-06-01", description: "Fun at the park" },
    { id: 19, title: "Mid-Year Review", start: "2025-06-15", end: "2025-06-16", description: "Company-wide check-in" },
    { id: 20, title: "AI Summit", start: "2025-06-20", end: "2025-06-21", description: "Industry conference" },
    { id: 21, title: "Q2 Closeout", start: "2025-06-30", end: "2025-06-30", description: "Finish quarterly goals" },
    { id: 22, title: "Independence Day", start: "2025-07-04", end: "2025-07-04", description: "Holiday in US" },
    { id: 23, title: "UX Workshop", start: "2025-07-10", end: "2025-07-11", description: "Improve design skills" },
    { id: 24, title: "Leadership Retreat", start: "2025-07-20", end: "2025-07-23", description: "Management offsite" },
    { id: 25, title: "Feature Freeze", start: "2025-08-01", end: "2025-08-01", description: "Lock features for release" },
    { id: 26, title: "Bug Bash", start: "2025-08-05", end: "2025-08-06", description: "Company-wide testing event" },
    { id: 27, title: "Release v2.0", start: "2025-08-10", end: "2025-08-10", description: "Major new release" },
    { id: 28, title: "Company Town Hall", start: "2025-08-15", end: "2025-08-15", description: "All-hands update" },
    { id: 29, title: "Hack Week", start: "2025-08-18", end: "2025-08-22", description: "Internal innovation week" },
    { id: 30, title: "Labor Day", start: "2025-09-01", end: "2025-09-01", description: "Public holiday" },
    { id: 31, title: "Strategy Session", start: "2025-09-10", end: "2025-09-11", description: "Plan for 2026" },
    { id: 32, title: "Client Training", start: "2025-09-18", end: "2025-09-19", description: "Customer onboarding" },
    { id: 33, title: "Tech Conference", start: "2025-10-01", end: "2025-10-03", description: "Attend conference" },
    { id: 34, title: "Annual Review Prep", start: "2025-10-10", end: "2025-10-10", description: "Get feedback ready" },
    { id: 35, title: "Server Maintenance", start: "2025-10-15", end: "2025-10-15", description: "Scheduled downtime" },
    { id: 36, title: "Halloween Party", start: "2025-10-31", end: "2025-10-31", description: "Team celebration" },
    { id: 37, title: "Budget Planning", start: "2025-11-05", end: "2025-11-06", description: "Plan for next year" },
    { id: 38, title: "Internal Demo Day", start: "2025-11-12", end: "2025-11-12", description: "Show off new tools" },
    { id: 39, title: "Thanksgiving", start: "2025-11-27", end: "2025-11-27", description: "Holiday in US" },
    { id: 40, title: "Black Friday Campaign", start: "2025-11-28", end: "2025-11-28", description: "Marketing blitz" },
    { id: 41, title: "Year-End Party", start: "2025-12-10", end: "2025-12-10", description: "Celebrate achievements" },
    { id: 42, title: "Q4 Close", start: "2025-12-15", end: "2025-12-15", description: "Finalize deliverables" },
    { id: 43, title: "Holiday Break", start: "2025-12-24", end: "2025-12-26", description: "Office closed" },
    { id: 44, title: "Boxing Day", start: "2025-12-26", end: "2025-12-26", description: "Holiday in some regions" },
    { id: 45, title: "New Year's Eve", start: "2025-12-31", end: "2025-12-31", description: "Year-end celebration" },
    { id: 46, title: "Planning Kickoff", start: "2025-01-02", end: "2025-01-02", description: "Start of planning cycle" },
    { id: 47, title: "Weekly Sync", start: "2025-02-03", end: "2025-02-03", description: "Monday check-in" },
    { id: 48, title: "Marketing Sprint", start: "2025-03-03", end: "2025-03-07", description: "Week-long campaign" },
    { id: 49, title: "Customer Feedback Review", start: "2025-04-09", end: "2025-04-09", description: "Analyze user feedback" },
    { id: 50, title: "Board Meeting", start: "2025-06-25", end: "2025-06-25", description: "Quarterly board update" },
  ];


const calender=document.getElementById("calender")
const monthDisplay=document.getElementById("monthDisplay")


const currentMonth=new Date()

function getCalender(){
    calender.innerHTML = "";
    const year=currentMonth.getFullYear()
    const month=currentMonth.getMonth()

    const monthYearDisplay= new Date(year,month)
    const formatYearMonth=monthYearDisplay.toLocaleString("default",{month:"long",year:"numeric"})
    const conToText=document.createTextNode(formatYearMonth)
    monthDisplay.innerHTML=""
    monthDisplay.appendChild(conToText)

    const yrMonDay= new Date(year, month+1,0)

    const numberDays=yrMonDay.getDate()
    console.log(numberDays)

    for (let i=0; i<numberDays;i++){
        const emptyBox=document.createElement("div")
        emptyBox.className="emptyBox"
        calender.appendChild(emptyBox)
    }

    for(let box=1;box <=numberDays; box++){
    
        const calenderGrid= document.createElement("div")
        calenderGrid.className="grid-div"
        calenderGrid.textContent=box
        calender.appendChild(calenderGrid)


        const padMonth=(month+1).toString().padStart(2,"0")
        const padDay=box.toString().padStart(2,"0")
        const connectHyphen=`${year}-${padMonth}-${padDay}`

        const filterEvent=events.filter(event=>{
        const stateDate=new Date(event.start) 
        const endDate=new Date(event.end)
        const convertCurrentDay=new Date(connectHyphen)
        return convertCurrentDay>=stateDate&&convertCurrentDay<=endDate
            
        
        })
    
        filterEvent.forEach(eve=>{
            const eventDiv=document.createElement("div")
            eventDiv.className="eventDiv"
            
        const title=document.createElement("p")
        title.textContent=eve.title
            eventDiv.title=eve.description
        eventDiv.appendChild(title)
        
            calenderGrid.appendChild(eventDiv)
            

        })
        calender.appendChild( calenderGrid)
    }

}


getCalender()
document.getElementById("prevButton").addEventListener("click",()=>{
    currentMonth.setMonth(currentMonth.getMonth()-1)
    getCalender()
})
document.getElementById("nextButton").addEventListener("click",()=>{
    currentMonth.setMonth(currentMonth.getMonth()+1)
    getCalender()
})





