
import './App.css'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import JobCard from './components/JobCard/JobCard'
import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase.config'

function App() {
// state variable to handle the array of objects coming from our firebase database
const [jobs, setJobs] = useState([]);
const tempJobs = [];
const fetchJobs = async () =>{
  const q = query(collection(db, 'jobs'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((job) => {
    tempJobs.push({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate()
    });
  })
  setJobs(tempJobs);
}

useEffect(()=>{
  fetchJobs()
},[])
  return (
    <div className='container'>
      <Navbar/>
      <Header />
      <SearchBar />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  )
}

export default App
