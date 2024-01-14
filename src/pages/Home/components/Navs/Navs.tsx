import { InputGroup } from 'react-bootstrap'
import Sidebar from '../../../../components/Sidebar/Sidebar'
import NavBar from '../../../../components/NavBar/NavBar'

const Navs = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Sidebar />
    </div>
  )
}
export default Navs
