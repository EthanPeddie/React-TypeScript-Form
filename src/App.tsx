import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"



const App = () => {
 const [show,setShow] = useState(false);
  return (
    <div className=" m-3">
     {show &&  <Alert onClose={() => setShow(false)} />}
      <Button  onClick={()=> setShow(true)} />
    </div>
  )
}

export default App