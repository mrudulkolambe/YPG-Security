import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ViewEmployee from './pages/ViewEmployee';
import AddEmployee from './pages/AddEmployee';
import ViewAsset from './pages/ViewAsset';
import AddAsset from './pages/AddAsset';
import AssetStatus from './pages/AssetStatus';
import AssignJobs from './pages/AssignJobs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view-employee" element={<ViewEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/view-asset" element={<ViewAsset />} />
          <Route path="/add-asset" element={<AddAsset />} />
          <Route path="/asset-status" element={<AssetStatus />} />
          <Route path="/assign-jobs" element={<AssignJobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
