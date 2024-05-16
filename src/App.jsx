import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  // state variable to handle the array of objects coming from our firebase database
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const jobsRef = query(collection(db, "jobs"));

    // displace data by oredr of latest jobs
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    const tempJobs = []; // Moved declaration inside the function
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs); // Moved outside the loop
  };

  const fetchJobsCustom = async (jobQuery) => {
    setCustomSearch(true);
    const jobsRef = query(collection(db, "jobs"));

    // displace data by oredr of latest jobs
    const q = query(
      jobsRef,
      where("type", "==", jobQuery.type),
      where("title", "==", jobQuery.title),
      where("experience", "==", jobQuery.experience),
      where("location", "==", jobQuery.location),
      orderBy("postedOn", "desc")
    );

    const req = await getDocs(q);
    const tempJobs = []; // Moved declaration inside the function
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs); // Moved outside the loop
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && (
        <div className="container2">
           <div className="flex justify-end mt-5">
         <button className="btn" onClick={fetchJobs}>
          clear Filters
        </button>
       </div>
        </div>
      )}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  );
}

export default App;
