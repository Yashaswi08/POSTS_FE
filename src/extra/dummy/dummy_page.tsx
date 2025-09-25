// "use client";

// import React, { useEffect, useState } from "react";

// import { useRouter } from "next/navigation";


// export default function Dummy() {
//   const router = useRouter();

//   const [data, setData] = useState([])
 


//   const posts = [
//     {
//         id: '0',
//         title: "First Title",
//         content: "Fist item in array",
//         isFav: false,
//     },
//     {
//         id: '1',
//         title: "Second Title",
//         content: "Fist item in array",
//         isFav: false,
//     },
//     {
//         id: '2',
//         title: "Second Title",
//         content: "Fist item in array",
//         isFav: false,
//     },
//     {
//         id: '3',
//         title: "Second Title",
//         content: "Fist item in array",
//         isFav: false,
//     }
//   ];

//   // fetching data ffrom 

//   const fetchData = ()=>{
   
//     data.length <= 0 ? setData(posts) : setData(posts);
//     // const res = await someCallback();
    

// }


//   const handleOnPress = (item)=>{
//     // console.log("item", item);
//     // ( item.isFav) ? item.isFav = false : item.isFav == true;

//     const res = posts.find((val) => val.id == item.id);
//     if(res.isFav ? res.isFav == false ?  )
    

//   }



//   useEffect(()=>{
//     fetchData();
//   },[])

  
  

 

//   return (


//     <>

//     {posts && posts.map((value)=> 
//         <div>
// <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#29442A] mb-4">
//           {value.title}
//         </h2>
//         <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
//             {value.content}
//          </p>
//          <button
//          onPress = {()=>handleOnPress(value)}
//          >{value.isFav?"like":"unlike"}</button>
//     </div>
        
//     )}


    
    
//     </>
//   );
// }
