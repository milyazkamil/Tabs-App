import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import JobInfo from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const newJobs = await resp.json();
        setJobs(newJobs);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main id="loading-container">
        <div class="circle">
          <div class="spinner"></div>
          <div class="inner-circle"></div>
        </div>
      </main>
    )
  }

  return (
    <>
      <main className="main">
        <Buttons jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <JobInfo jobs={jobs} currentItem={currentItem} />
      </main>
    </>
  )
}
export default App;
