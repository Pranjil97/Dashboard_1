import dashboardicon from '../Assets/dashboardicon.png'
import revenueicon from '../Assets/revenueicon.png'
import errorsicon from '../Assets/errorsicon.png'
import followersicon from '../Assets/followersicon.png'
import updateicon from '../Assets/updateicon.png'
import calendaricon from '../Assets/calendaricon.png'
import clockicon from '../Assets/clockicon.png'

let data=[{
    img:`${dashboardicon}`,
    heading:"Number",
    capacity:"150GB",
    icon:`${updateicon}`,
    tool:"Update Now"
  },

    {
    img:`${revenueicon}`,
    heading:"Revenue",
    capacity:"$ 1,345",
    icon:`${calendaricon}`,
    tool:"Last day"},

    {
    img:`${errorsicon}`,
    heading:"Errors",
    capacity:"23",
    icon:`${clockicon}`,
    tool:"In the last hour"},

    {
    img:`${followersicon}`,
    heading:"Followers",
    capacity:"+45K",
    icon:`${updateicon}`,
    tool:"Update Now"}
  ]

  export default data;