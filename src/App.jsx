const App = () => {
  const HandleClick = () => {
    console.log("Working...");
  };
  return (
    <div className='flex justify-center  h-screen p-5 items-center ' >
      <button className='bg-blue-600 text-white' onClick={HandleClick}>Click here !</button>
      {/* <button className='bg-red-600 text-white' onClick={HandleClick}>Click here !</button> */}
    </div>
  );
};

export default App;
