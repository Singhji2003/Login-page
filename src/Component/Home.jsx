const Home = ()=>{
return(
<>
    <div className="container flex ">
    <div className="left">
        <img src= {require("./img/leftimg.PNG")} alt="Background" className="m-6"/>
    </div>
    <div className="right  mx-auto text-center lg:mt-20 p-2 md:">
    <img src = {require('./img/welcome logo.PNG')} className="m-auto"/>
    <h1  className="text-black font-semibold text-3xl">Welcome <span className="text-[rgb(8,165,147)]">Back!</span></h1>
    <p className="text-[rgb(121,130,148)] font-normal text-sm mt-2">Glad To see you, Again!</p>
    <form className="flex flex-col mt-8">
        <input type="email" placeholder="Enter your email" className="border text-[rgb(172,172,183)] border-[rgb(172,172,183)] p-2 w-80 rounded-xl"/>
        <input type="password" placeholder="Enter your password" className="border text-[rgb(172,172,183)] border-[rgb(172,172,183)] p-2 w-80 rounded-xl my-5"/>
        <span className="relative ml-[12rem] -mt-4 text-[rgb(172,172,183)] cursor-pointer">Forget Password?</span>
        <button className="w-80 bg-black text-white h-12 rounded-xl mt-6 text-lg font-medium shadow-lg shadow-black">Login In</button>
        <span className="text-[rgb(172,172,183)] text-base mt-16 font-medium cursor-pointer">Don't an account yet? <span className="text-[rgb(8,165,147)]">Sign Up</span></span>
    </form>
    </div>
    </div>
</>
)}
export default Home;