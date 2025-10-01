import { Routes, Route, Link } from "react-router-dom"
import ExpenseTracker from "./ExpenseTrackerPage"
import ExpenseTrackerImg from "./assets/Screenshot-expense-tracker.png"
import NotificationPage from "./NotificationPage"
import NotificationImg from "./assets/notificationImg.png"

function Home() {
  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          <p className="mb-6">
            Hola! I'm Luis Andrade👋. I'm a curiosity-driven developer based in Chile.
          </p>
          <p className="mb-6">
            I build backend applications with <strong>Go</strong>,{" "}
            <strong>Postgres</strong>, and <strong>React</strong>. I enjoy
            working on projects where I can practice{" "}
            <strong>DevOps, and deploying applications the cloud while improving CI/CD pipelines</strong>.
          </p>
          <p>
            Say hi →{" "}
            <a
              href="luisbandradelara@gmail.com"
              className="underline underline-offset-2"
            >
             luisbandradelara@gmail.com
            </a>
          </p>
        </div>

        {/* Social links */}
        <div className="flex gap-6 text-gray-600">
          <a href="https://github.com/LuisBAndrade" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 h-screen overflow-y-scroll snap-y snap-mandatory">
        <div className="h-screen flex items-center justify-center snap-start p-10">
          <Link
            to="/expense-tracker"
            className="relative rounded-3xl overflow-hidden shadow-2xl w-full transition-transform transform hover:scale-[1.02] bg-white"
          >
            <img
              src={ExpenseTrackerImg}
              alt="Expense Tracker"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-gray-200 text-sm">2024 — 2025</p>
              <h2 className="text-2xl font-semibold text-white">Expense Tracker</h2>
            </div>
          </Link>
        </div>
        <div className="h-screen flex items-center justify-center snap-start p-10">
          <Link
            to="/notification-stream"
            className="relative rounded-3xl overflow-hidden shadow-2xl w-full transition-transform transform hover:scale-[1.02] bg-white"
          >
            <img
              src={NotificationImg}
              alt="Notifications"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-gray-200 text-sm">2024 — 2025</p>
              <h2 className="text-2xl font-semibold text-white">Real Time Notification</h2>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expense-tracker" element={<ExpenseTracker />} />
      <Route path="/notification-stream" element={<NotificationPage />} />
    </Routes>
  )
}

export default App
