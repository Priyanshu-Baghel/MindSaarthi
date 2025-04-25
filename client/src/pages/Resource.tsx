import React from 'react'


const resources = [
  {
    title: "Understanding Mental Health",
    description: "Explore mental health concepts with guides and tips.",
    link: "https://www.mentalhealth.org.uk/explore-mental-health",
    type: "Article",
  },
  {
    title: "HelpGuide Self-Help Library",
    description: "Tools and techniques for anxiety, depression, and more.",
    link: "https://www.helpguide.org/",
    type: "Guide",
  },
  {
    title: "NIMH Information Center",
    description: "Official mental health facts and help resources.",
    link: "https://www.nimh.nih.gov/health",
    type: "Govt. Resource",
  },
  {
    title: "iCall India (24/7)",
    description: "Free and confidential helpline for mental support in India.",
    link: "tel:+919152987821",
    type: "Helpline",
  },
  {
    title: "Kati Morton – YouTube",
    description: "Mental health tips from a licensed therapist.",
    link: "https://www.youtube.com/user/KatiMorton",
    type: "Video",
  },
  {
    title: "The Mindful Kind Podcast",
    description: "A relaxing podcast to manage emotions mindfully.",
    link: "https://open.spotify.com/show/7oQ1eLKoDdvR1p5Dr3Uo1K",
    type: "Podcast",
  },
  {
    title: "MoodGym CBT Tool",
    description: "Interactive online training for mental wellness.",
    link: "https://moodgym.com.au/",
    type: "Self-Help",
  },
  {
    title: "Headspace App",
    description: "Meditation and mindfulness app for daily wellness.",
    link: "https://www.headspace.com/",
    type: "App",
  },
  {
    title: "Happify",
    description: "Science-based activities to boost emotional health.",
    link: "https://www.happify.com/",
    type: "Activity Tool",
  },
];

const Resource = () => {
  return (
     <div className="bg-white min-h-screen px-6 py-12 mt-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Explore <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Resources</span>
        </h1>

        <p className="text-lg text-center mb-12 text-gray-700">
          Curated tools, guides, and helplines to support your mental health journey.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res, index) => (
            <a
              key={index}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl shadow-md p-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 hover:shadow-xl hover:scale-[1.02] transition-all border border-blue-100"
            >
              <div className="mb-3 text-sm text-purple-600 font-semibold">
                {res.type}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{res.title}</h3>
              <p className="text-gray-700">{res.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resource