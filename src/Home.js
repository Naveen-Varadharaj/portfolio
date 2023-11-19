
import './index.css';
import pic from './images/Pic2.jpeg';
function Home() {
  return (
    <div className='main grid px-10'>
      <div className='mx-auto my-auto flex justify-around w-full h-5/6 py-5 px-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg'>
      
        <div className='my-auto'>
        <h1 className='text-4xl font-bold mb-2'>Naveen Varadharaj</h1>
        <h3 className='text-2xl font-semibold text-white'>Front end developer</h3>
        </div>
        <div className='my-auto'>
        <img className='w-56 h-56 rounded-full' src={pic} alt='My pic'  />
        </div>
      </div>
    </div>
     
  );
}

export default Home;

