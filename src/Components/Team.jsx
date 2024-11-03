import React from 'react';
import TeamMember from './TeamMember';

const TeamMembers = () => {
    const teamMembers = [
        {
          name: 'Prashant Khatiwada',
          image: 'Prashant.JPG'
        },
        {
          name: 'Anish Pandey',
          image: 'Anish.jpg'
        },
        {
          name: 'Dikshya Giri',
          image: 'Dikshya.jpg'
        }
      ];
  return (
    <div className='mb-20 my-20' id='team'>
    <h1 className='text-center my-5 mb-5 text-2xl font-bold'>Our Team</h1>
    <div className="flex flex-row gap-28 mx-20 justify-center cards">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
    </div>
  );
};
export default TeamMembers