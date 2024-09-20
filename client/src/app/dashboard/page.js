import Image from "next/image";
import hutbg from '../../public/hut.png';

// sidebar color: D9D9D9
// right side bg: style = {{backgroundImage: `url(${hutbg.src})`}}

export default function dashBoard()  {

    return (
    <> 

<div className="flex h-screen">
 {/* left 1/6 page */}
 <div className="w-1/6 p-4 bg-cover bg-center relative flex items-center justify-center text-center" style={{ backgroundColor: '#D9D9D9' }}>
        <div className="flex flex-col items-center">
          
        <button className="h-12 w-40 py-2 px-4 bg-white text-[#423D38] rounded-full flex items-center justify-center mb-10 text-xs font-geistMono">
             Profile
        </button>

        <button className="h-12 w-40 py-2 px-4 bg-white text-[#423D38] rounded-full flex items-center justify-center mb-10 text-xs font-geistMono">
             Manage Events
        </button>

        <button className="h-12 w-40 py-2 px-4 bg-white text-[#423D38] rounded-full flex items-center justify-center mb-10 text-xs font-geistMono">
             Volunteer Matches
        </button>

        <button className="h-12 w-40 py-2 px-4 bg-white text-[#423D38] rounded-full flex items-center justify-center text-xs font-geistMono">
             Notifications
        </button>

          </div>
        </div>


        {/* right side 5/6 page */}
        <div className="w-5/6 p-4 flex items-center justify-center text-center" style = {{backgroundImage: `url(${hutbg.src})`}}>
        <div className="flex flex-col items-center">

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-black text-xl mb-4 font-geistMono mt-10 italic">Our Mission</h2>
                <p className="text-gray-700 font-geistMono mb-20 mt-20">Volunteering is at the heart of building strong, compassionate communities, where everyone has the opportunity to make a difference. Our mission is to create meaningful opportunities that allow individuals to contribute their time and skills, fostering a culture of giving back. By volunteering, we not only support those in need but also inspire others to take action and create lasting, positive change. Together, we can amplify our impact and shape a better future for everyone.</p>
        </div>

        </div>
      </div>

</div>


</>

);
}