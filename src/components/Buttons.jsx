const Buttons = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div id="buttons-container">
      {
        jobs.map((item, index) => (
          <button
            onClick={() => setCurrentItem(index)}
            className={`job-button ${currentItem === index ? "active-button" : ""}`}
            type="button"
            key={item.id}
          >
            {item.company}
          </button>
        ))
      }
    </div>
  )
}
export default Buttons;