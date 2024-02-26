  // const [change, setChange] = useState(window.innerWidth);

  // useEffect(()=>{
  //   setChange(window.innerWidth);
  // },[change]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setChange(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // Empty dependency array to run this effect only once

  // useEffect(() => {
  //   const handleResize = () => {
  //     setChange(window.innerWidth);
  //   };

  //   // Update width initially and on resize
  //   handleResize();

  //   // Update width on resize
  //   window.onresize = handleResize;

  //   // Clean up
  //   return () => {
  //     window.onresize = null;
  //   };
  // }, []);





    //<div>
    // <>
    // <h1 className="text-3xl font-bold underline text-red-500">
    //   Hello world!
    // </h1>
    // <div className=" mt-9 flex">
    //   <label>Window Width is : </label>
    //   <div className=" h-9 w-auto border">{change}</div>
    // </div>
    // </>
    //</div>