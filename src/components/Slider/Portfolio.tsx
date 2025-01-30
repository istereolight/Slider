import Slider from "./Slider";
import {tabContent} from './tabContent'

export default function Portfolio () {
  return (
    <div className="m-4 max-w-screen ">
      <Slider tabItems={ tabContent } />
    </div>
    
  )
}