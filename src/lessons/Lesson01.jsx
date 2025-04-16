const MyButton = function(){
  function click(){
    alert("I've been clicked!")
  }
  
  return(
    <button onClick={click}>
      I'm a button
    </button>
  )
};



export default function MyApp(){
  return(
    <div>
      <h1>Welcome to my app!</h1>
      <MyButton />
    </div>
  )
};
