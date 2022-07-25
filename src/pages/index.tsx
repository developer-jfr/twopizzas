import { HomeModule } from 'modules';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomeModule />} />
        </Routes>
    </Router>
  )
}

export default Pages