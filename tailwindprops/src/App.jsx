
import "./App.css";
import Card from "./Components/Card";


function App() {
  // let obj = {
  //   username:"sansar",
  //   age:21
  // }

//let newarr = [1,2,3];   

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl m-4">
        Tailwind Css
      </h1>
    <Card username="viterreactproject" btnText="click me" />
    <Card username="reactproject"  />
    </>
  );
}

export default App;
