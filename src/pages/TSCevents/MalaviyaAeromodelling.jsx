import Header from '../../components/Header';
import BentoGrid from '../../components/BentoGrid';
import EventPoster from '../../components/EventPoster';
import EventDescription from '../../components/EventDescription';
import EventRules from '../../components/EventRules';
import EventRegistrationButton from '../../components/EventRegistrationButton';
import EventLeaderboardButton from '../../components/EventLeaderboardButton';
import { Link } from 'react-router-dom';
import malaviyaPoster from '../../assets/malaviya.jpg';

const MalaviyaAeromodelling = () => {
  // Single Event Data - Customize this for LA MIRA event
  const event = {
    title: "MALAVIYA AEROMODELLING COMPETITION",
    category: "Competition",
    poster: malaviyaPoster, // Replace with your actual poster path
    description: "The Malaviya Aeromodelling Competition is an exciting multi-round aerial challenge where teams design, build, and fly their own aircraft models. It tests engineering skills, real-time decision-making, and precise flying ability. Teams compete across gliding, powered-range, and a final surprise round—each designed to evaluate stability, control, and innovation. Only the most skilled and aerodynamic-savvy teams will rise through the rounds and claim the title of Malaviya Aero Champions.",
    rules: [
        "Each team has 3-5 members (including 1 pilot), and a college/school may send any number of teams.",
        "All team members must be students of the same school/college and must carry a valid student ID card.",
        "One student can join only one team and cannot fly or operate aircraft of any other team.",
        "The pilot must be a registered member of that team or an official pilot provided by the organizers.",
    ],
    googleFormLink: "https://forms.gle/1EJjHfB6KBRk5jCN9",
    leaderboardLink: "",
    eventDate: "December 12, 2025",
    eventTime: "10:00 AM - 5:00 PM",
    venue: "MMMUT Campus"
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0f]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* Back Button */}
        <div className="pt-28 px-6 max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
            <span className="text-xl">←</span>
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        {/* Event Content */}
        <div className="py-12 px-6 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-white/90 mb-4">
              {event.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {event.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span>{event.eventDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <span>{event.eventTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span>{event.venue}</span>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <BentoGrid className="max-w-7xl mx-auto pb-20">
            {/* Poster - Large */}
            <EventPoster
              poster={event.poster}
              title={event.title}
              size="large"
            />

            {/* Description - Medium */}
            <EventDescription
              description={event.description}
              size="medium"
            />

            {/* Rules - Medium */}
            <EventRules
              rules={event.rules}
              size="medium"
            />

            {/* Registration Button - Small */}
            <EventRegistrationButton
              googleFormLink={event.googleFormLink}
              size="small"
            />

            {/* Leaderboard Button - Small */}
            <EventLeaderboardButton
              leaderboardLink={event.leaderboardLink}
              size="small"
            />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
};

export default MalaviyaAeromodelling;
