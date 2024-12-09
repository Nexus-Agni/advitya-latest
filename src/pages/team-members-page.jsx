import React from 'react'
import { useNavigate } from 'react-router-dom'


const LeadershipCard = ({ member, showImage = true }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg border-white border-opacity-20 border-2 transition-all duration-300 hover:scale-105 hover:border-purple-500 flex flex-col items-center w-full max-w-sm">
    {showImage && (
      <img
        src={member.image}
        alt={member.name}
        width={200}
        height={200}
        className="mb-4 object-cover rounded-2xl"
      />
    )}
    <h4 className="text-xl font-semibold text-white text-center">{member.name}</h4>
    <p className="text-purple-300 text-center">{member.position}</p>
  </div>
)

const LeadershipSection = ({ title, members, showImage = true }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((member, index) => (
        <LeadershipCard key={index} member={member} showImage={showImage} />
      ))}
    </div>
  </div>
)

export default function TeamMembersPage() {
  const chancellor = { name: "Dr. G. Viswanathan", position: "Chancellor", image: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733749788/chancellor.jpg" }

  const vicePresidents = [
    { name: "Mr. Sankar Viswanathan", position: "Vice President", image: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733299177/vp.jpg" },
    { name: "Ms. Kadhambari S Viswanathan", position: "Assistant Vice President", image: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733750221/avp.jpg" },
  ]

  const administration = [
    { name: "Dr. Senthil Kumar Arumugam", position: "Vice Chancellor", image: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733299177/vc.jpg" },
    { name: "KK Nair", position: "Registrar", image: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733751658/registrar.jpg" },
  ]

  const convenor = [
    { name: "Dr. John Doe", position: "Convenor" },
  ]

  const coConvenors = [
    { name: "Prof. Jane Smith", position: "Co-Convenor" },
    { name: "Dr. Michael Johnson", position: "Co-Convenor" },
  ]

  const facultyOrganisers = [
    { name: "Dr. Alice Johnson", position: "Director of Student Welfare" },
    { name: "Prof. Bob Williams", position: "Assistant Director of Student Welfare" },
    { name: "Dr. Emily Brown", position: "Assistant Director of Student Welfare" },
    { name: "Dr. David Lee", position: "Assistant Director of Student Welfare" },
    { name: "Prof. Sarah Connor", position: "Assistant Director of Student Welfare" },
  ]

  const studentOrganisers = [
    { name: "Alex Turner", position: "General Secretary" },
    { name: "Olivia Martinez", position: "Joint Secretary" },
    { name: "Ryan Patel", position: "Academic Secretary" },
    { name: "Sophia Nguyen", position: "Cultural Secretary" },
    { name: "David Kim", position: "Technical Secretary" },
    { name: "Emma Wilson", position: "Assistant Cultural Secretary" },
    { name: "James Taylor", position: "Assistant Cultural Secretary" },
    { name: "Natalie Parker", position: "Assistant Technical Secretary" },
    { name: "Chris Evans", position: "Assistant Technical Secretary" },
    { name: "Sarah Lee", position: "Sports Secretary" },
    { name: "Michael Chen", position: "Assistant Sports Secretary" },
    { name: "Lisa Wong", position: "Assistant Sports Secretary" },
    { name: "Tom Harris", position: "Assistant Sports Secretary" },
    { name: "Rachel Green", position: "Assistant Sports Secretary" },
  ]

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-start">
        <button
          onClick={() => navigate("/", { state: { from: "Team" } })}
          className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">The Minds Behind AdVITya'25</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">Our Patrons</h2>
          <div className="flex justify-center mb-8">
            <LeadershipCard member={chancellor} showImage={true} />
          </div>
          <LeadershipSection members={vicePresidents} showImage={true} />
          <LeadershipSection members={administration} showImage={true} />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">Convenor</h2>
          <LeadershipSection members={convenor} showImage={false} />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">Co-Convenors</h2>
          <LeadershipSection members={coConvenors} showImage={false} />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">Faculty Organisers</h2>
          <LeadershipSection members={facultyOrganisers} showImage={false} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">Student Organisers</h2>
          <LeadershipSection members={studentOrganisers} showImage={false} />
        </section>
      </div>
    </div>
  )
}

