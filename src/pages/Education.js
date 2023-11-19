const Education= ()=>{
return(
    <div className='main grid px-10'>
        <div  className='mx-auto my-auto  w-full h-5/6  py-5 px-5  bg-gradient-to-r from-lime-400 to-green-500 rounded-lg grid text-center '>
        <h1 className="w-full text-center text-3xl font-bold  text-black  my-auto ">Education</h1>
        <hr className=" border  border-2 border-black"/>
        <div className="w-fit mx-auto my-auto"><h2 className="text-lg font-bold">BE-Electrical and Electronics Engineering</h2>
        <p className="text-base font-mono font-base text-white">College Name: Sri Eshwar College of Engineering
        <br />
        Duration: 2017 to 2021 <br />
        CGPA: 8.24 
        </p>
        </div>
        <hr className=" border  border-blue-700"/>
        <div className="w-fit mx-auto "><h2 className="text-lg  font-bold">High School</h2>
        <p className="text-base font-mono font-base text-white">School Name: Veveaham Higher Secondary School
        <br />
        Duration: 2016 to 2017 <br />
        Percentage: 94.5% 
        </p>
        </div>
       <hr className=" border  border-blue-700"/>
        <div className="w-fit mx-auto"><h2 className="text-lg font-bold">Secondary School</h2>
        <p className="text-base font-mono font-base text-white">School Name: Viswadeepthi Matric Higher Secondary School
        <br />
        Duration: 2014 to 2015 <br />
        Percentage: 92.2% <br />
        </p>
        </div>
        </div>
    </div>

    );
};
export default Education;