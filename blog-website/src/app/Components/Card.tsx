// // Card.tsx

// import React from 'react';
// import 'blog-website\src\assets';

// interface CardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   altText?: string;
// }

// const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText }) => {
//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden">
//       <div className="flex flex-col md:flex-row">
//         {/* Text Section */}
//         <div className="md:w-1/2 p-6 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
//           <p className="text-gray-600">{description}</p>
//         </div>
//         {/* Image Section */}
//         <div className="md:w-1/2">
//           {/* <img
//             className="object-cover w-full h-64 md:h-full"
//             src={imageUrl}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
