import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {v4 as uuidv4} from "uuid";

const Duties = ({ duties }) => {
  return (
    <div id='job-desc-container'>
      {
        duties.map((duty) => {
          const id = uuidv4();
          return (
            <div className="job-desc" key={id}>
              <MdKeyboardDoubleArrowRight className="job-icon" />
              <p>{duty}</p>
            </div>
          )
        })
      }
    </div>
  )
}
export default Duties;