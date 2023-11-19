const About= ()=>{
return(
    <div className='main grid px-10'>
    <div  className='mx-auto my-auto  w-full  h-5/6  py-5 px-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg grid '>
    <h1 className="w-full text-center text-3xl font-bold  text-black  my-auto ">About</h1>
    <hr className=" border  border-2 border-black mt-2"/>
    <div className='mx-auto my-auto text-white'>
        <p className=" my-2 text-xl font-mono " >Date of Birth: 28-Sept-1999</p>
    <p className=" text-xl font-mono">I am currently living in Pollachi. I had completed my under graduation in the stream of Electrical and Electronics Engineering from Sri Eshwar college, Coimbatore.</p>
    <p className=" text-xl font-mono">I got placed as a Associate Professional Software Engineer in the company, DXC Technology. I have 1.7 Years experience in Frontend Development. I have good knowledge in React JS, HTML, CSS, Java-Script and Tailwind CSS.</p>
    <p className=" text-xl font-mono">I have involved in Bill-Booking project, which is a bill printing app in the shop. The list of items is displayed on the screen in the shop so customers can select the items required and print the bill without standing in the queue.</p>
      </div>
        <hr className=" border  border-2 border-black"/>
            <div className='flex justify-between w-full  mx-auto my-auto text-xl font-mono text-white  '>
              <p>Contact number: +91-9597074818</p>
              <p >Email address: naveenvaradharaj28@gmail.com</p>
            </div> 
            <div className=' text-xl font-mono text-white'>
              <p>Place: Pollachi</p>
            
          </div>
          
          </div>
</div>
    );
};
export default About;