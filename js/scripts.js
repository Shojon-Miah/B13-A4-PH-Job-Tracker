// Add Tab Switching with filter method

// Active Tab Track
let currentTab = "all";
//  Tab Button Select
const tabButtons =document.querySelectorAll(".tab-button");

//Tab Click Event
tabButtons.forEach(function(button){

button.addEventListener("click", function(){

// Active class remove from all: 
tabButtons.forEach(btn => btn.classList.remove("active-tab"))

//add active to click
button.classList.add("actice-tab");

// select tab type
const selectedTab = button.dataset.tab;
currentTab = selectedTab;

filterAndRenderJob();

});

});



// Create Filter Function
function filterAndRenderJob(){


    let filteredJobs;

    if(currentTab === "all"){
        filteredJobs = jobsData;
    }
    else {
        filteredJobs = jobsData.filter(function(job){

            return job.status === currentTab;
        });
    }

    renderJobs(filteredJobs);
}

//Dashboard Count Function

function updateDashboardCounts(){

    const total = jobsData.length;

    const interviewCount = jobsData.filter(job => job.status === "interview").length;
    const rejectedCount = jobsData.filter(job => job.status === "rejected").length;


    document.getElementById("totalJobsCount").textContent = total;
    document.getElementById("interviewJobsCount").textContent = interviewCount;
    document.getElementById("rejectedJobsCount").textContent = rejectedCount;
    
}


//Interview, Rejected Button Logic with Toggle

// set Event Listener 

const jobsContainer = document.getElementById("jobsCardsContainer");

jobsContainer.addEventListener("click", function(event){

    const clickedElement = event.target;
    
    // for interview button
    if(clickedElement.classList.contains("interview-btn")){
        const jobId = parseInt(clickedElement.dataset.id);
        updateJobStatus(jobId, "interview");
    }
    // for rejected button
    if(clickedElement.classList.contains("rejected-btn")){
        const jobId = parseInt(clickedElement.dataset.id);
        updateJobStatus(jobId, "rejected");
    }

});


// Toggle Logic -> status update function
function updateJobStatus(jobId, newStatus){

    const job = jobsData.find(function(item){
        return item.id === jobId;
    });

    if(!job) return;

    // toggle
    if (job.status === newStatus){
        job.status = "all";
    }
    else {
        job.status = newStatus;
    }

    filterAndRenderJob();
}







// Jobs description section 

const jobsData = [

    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $ 175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all",
    },

    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: " $80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all",
    },

    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: " $125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "all",
    },

    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all",
    },

    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: " $110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "all",
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,00",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "all",
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Austin, TX",
        type: "Remote",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "all",
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all",
    }

];


// console.log(jobsData);

// display Status Text in dashboard

function getStatusText(status) {
    if (status === 'interview') {
        return "INTERVIEW";
    }
    else if (status === "rejected") {
        return "REJECTED";
    }
    else {
        return "NOT APPLIED";
    }
}



// Create renderJobs user define function to make card

function renderJobs(jobsArray) {
    const container = document.getElementById("jobsCardsContainer");
    
    container.innerHTML = "";

    // for empty HTML structure
    if (jobsArray.length === 0){
        container.innerHTML = `
        <div class="empty-state">
            <i class="fa-regular fa-folder-open empty-icon"></i>
            <h3 class="empty-title">No Jobs Available</h3>
            <p class="empty-subtitle">Check back soon for new job opportunities</p>
        </div>
    `;

        updateDashboardCounts();
        document.getElementById("tabJobsCount").textContent = 0;

        return;

}

    jobsArray.forEach(function (job) {

        const card = document.createElement("div");
        card.classList.add("job-card");

        // display job cards description in the dashboard 

        card.innerHTML = `
            <button class="delete-icon" data-id= "${job.id}"><i class="fa-solid fa-trash"></i></button>

            <h3 class="job-company">${job.companyName}</h3>
            <p class="job-position">${job.position}</p>

            <div class="job-meta">
                <span class="job-location">${job.location}</span>
                <span class="meta-separator">•</span>
                <span class="job-type">${job.type}</span>
                <span class="meta-separator">•</span>
                <span class="job-salary">${job.salary}</span>
            </div>

            <p class="job-status ${job.status}">${getStatusText(job.status)}</p>
            <p class="job-description"> ${job.description}</p>

            <div class="job-actions">

                <button class="interview-btn" data-id ="${job.id}">INTERVIEW</button>
                <button class="rejected-btn" data-id= "${job.id}">REJECTED</button>
            
            </div>

        `;

        container.appendChild(card);

    });

    // count update

    updateDashboardCounts();
    document.getElementById("tabJobsCount").textContent = jobsArray.length;

}

renderJobs(jobsData);



