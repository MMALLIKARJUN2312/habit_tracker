import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="mainHeading">Habit Tracker</h1>
      <form className="signInForm">
        <label htmlFor="habitName">Enter the Habit Name: </label>
        <input type="text" id="habitName" className="userInput" required />
        <label id="frequency">Enter the Frequency: </label>
        <input type="text" id="frequency" className="userInput" required />
        <button type="submit" className="addButton">
          Add
        </button>
      </form>
    </div>
  );
}
