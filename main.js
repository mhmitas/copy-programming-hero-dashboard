import './styles/navStyle.css'
import './styles/main-content-container-style.css'

async function loadMilestoneData() {
  const res = await fetch('https://openapi.programming-hero.com/api/course/curriculum')
  const data = await res.json()
  displayMilestones(data.data);
}
loadMilestoneData()

const milestonesContainer = document.querySelector('.milestone-container')

function displayMilestones(milestones) {
  console.log(milestones);
}