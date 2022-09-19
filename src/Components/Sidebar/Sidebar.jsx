import "./Sidebar.scss"
import img from '../../images/logo.png'
import {AiFillDashboard} from "react-icons/ai"
import {FaPaperPlane} from "react-icons/fa"
import {HiArchive} from "react-icons/hi"
import {GiWhiteBook} from "react-icons/gi"


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
        <img className="img" src={img} />    
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <li>
                <AiFillDashboard/>
                <span>Dashboard</span></li>
            </ul>
            <ul>
                <li>
                <FaPaperPlane/>
                <span>Requests</span></li>
            </ul>
            <ul>
                <li>
                <HiArchive/>
                <span>Archive</span></li>
            </ul>
            <ul>
                <li>
                <GiWhiteBook/>
                <span>Report</span></li>
            </ul>
        </div>
        <div className='bottom'>color options</div>
    </div>
    
  )
}

export default Sidebar