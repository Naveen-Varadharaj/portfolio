import '../index.css';
const Resume= ()=>{
return(
<div className='main grid px-10'>
    <div  className='mx-auto my-auto  w-full h-5/6  py-5 px-5 bg-gradient-to-r from-lime-300 to-purple-300 rounded-lg grid'>
    <h1 className="w-full text-center text-3xl font-bold  text-black  my-auto ">Projects</h1>
    <hr className=" border border-2   border-black"/>
        <div className="w-full  text-center ">
        
             <ul className="text-gray-900 font-mono font-semibold text-lg " >
                
                 <a href="https://naveen-varadharaj.github.io/landingpage_movies/" target="_blank" rel="noreferrer"><li className="an w-fit mx-auto my-2 text-red-900 px-2 rounded">Movie Landing Page </li></a>
                <hr className=" border   border-blue-700"/>
                 <a href="https://naveen-varadharaj.github.io/calculator/" target="_blank" rel="noreferrer"><li className="an w-fit mx-auto my-2 text-red-900 px-2 rounded ">Calculator</li></a>
                <hr className=" border   border-blue-700"/>
                 <a href="https://naveen-varadharaj.github.io/todo_redux/" target="_blank" rel="noreferrer"><li className="an w-fit mx-auto my-2 text-red-900 px-2 rounded ">E-commerce Website</li></a>
                <hr className=" border   border-blue-700"/>
                 <a href="https://naveen-varadharaj.github.io/vgtstask/" target="_blank" rel="noreferrer"><li className=" an w-fit mx-auto my-2 text-red-900 px-2 rounded ">Food App</li></a>
                 <hr className=" border   border-blue-700"/>
                <a className='' href="https://naveen-varadharaj.github.io/multi_step_form/" target="_blank" rel="noreferrer"><li className=" an w-fit mx-auto my-2 text-red-900 px-2 rounded  ">Multi Step Form</li></a>
                <hr className=" border   border-blue-700"/> 
                
            </ul>
            
            
        </div>
    </div>
    </div>
    );
};
export default Resume;