import React from "react"
import { replace, useNavigate } from "react-router-dom"

const FacultyMember = ({ member }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white border-opacity-20 transition-all duration-300 hover:scale-105 hover:border-purple-500">
    <img
      src={member.image}
      alt={member.name}
      width={200}
      height={200}
      className="rounded-full mx-auto mb-4"
    />
    <h4 className="text-xl font-semibold text-white">{member.name}</h4>
    <p className="text-purple-300">{member.position}</p>
  </div>
)

const FacultySection = ({ title, members }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-purple-400">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <FacultyMember key={index} member={member} />
      ))}
    </div>
  </div>
)

const StudentMember = ({ member }) => (
  <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-4 shadow-md border border-white border-opacity-10 transition-all duration-300 hover:scale-105 hover:border-purple-500">
    <h4 className="text-lg font-semibold text-white">{member.name}</h4>
    <p className="text-purple-300">{member.position}</p>
  </div>
)

const StudentTeam = ({ heading, members }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-purple-400">{heading}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {members.map((member, index) => (
        <StudentMember key={index} member={member} />
      ))}
    </div>
  </div>
)

export default function TeamMembersPage() {

  const navigate = useNavigate();
  const conveners = [
    { name: "Dr. John Doe", position: "Convener", image: "/placeholder.svg?height=200&width=200" },
    { name: "Prof. Jane Smith", position: "Co-Convener", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Michael Johnson", position: "Co-Convener", image: "/placeholder.svg?height=200&width=200" },
  ]

  const studentWelfareOffice = [
    { name: "Dr. Alice Johnson", position: "Director of Student Welfare", image: "/placeholder.svg?height=200&width=200" },
    { name: "Prof. Bob Williams", position: "Assistant Director of Student Welfare", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Emily Brown", position: "Assistant Director of Student Welfare", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Emily Brown", position: "Assistant Director of Student Welfare", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Emily Brown", position: "Assistant Director of Student Welfare", image: "/placeholder.svg?height=200&width=200" },
  ]

  const studentCouncil = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start py-4">
          <button
            onClick={() =>
              navigate("/", {replace: true})
            }
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
      <div className="max-w-7xl mx-auto border-2 border-white">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Team Members</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300">Faculty Members</h2>
          <FacultySection title="Conveners" members={conveners} />
          <FacultySection title="Student Welfare Office" members={studentWelfareOffice} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-purple-300">Student Members</h2>
          <StudentTeam heading="Student Council" members={studentCouncil} />
        </section>
      </div>
    </div>
  )
}

