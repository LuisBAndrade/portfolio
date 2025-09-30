import { Link } from "react-router-dom"
import { ExternalLink, Github } from "lucide-react"
import ExpenseTrackerImg from "./assets/Screenshot-expense-tracker.png"

function ExpenseTrackerPage() {
  return (
    <div className="w-full min-h-screen overflow-y-scroll p-10 flex justify-center">
      <div className="max-w-4xl w-full space-y-10">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900">Expense Tracker</h1>

        {/* Screenshot */}
        <div className="flex justify-center">
          <img
            src={ExpenseTrackerImg}
            alt="Expense Tracker Screenshot"
            className="rounded-2xl shadow-lg max-w-3xl w-full"
          />
        </div>

        {/* Explanation */}
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Developed a secure expense tracking application where users can
            create categories, log expenses, and view real-time totals. Designed
            with a monolithic Go backend and a React frontend, deployed with
            Caddy on EC2.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              Secure <strong>Go backend API</strong> with PostgreSQL for auth,
              session management, and CRUD.
            </li>
            <li>
              <strong>Cookie-based sessions</strong> with login/logout and
              multi-device support.
            </li>
            <li>
              Schema & migrations with <strong>Goose + SQLC</strong> for safe
              queries.
            </li>
            <li>Optimized queries with indexes for fast reporting.</li>
            <li>
              <strong>React (Vite + TS)</strong> frontend for registration,
              login, and expense tracking.
            </li>
            <li>
              <strong>Caddy + EC2 deployment</strong> with automatic HTTPS.
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://expense.benexpense.lat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-lg"
          >
            Live Demo <ExternalLink className="w-5 h-5 ml-2" />
          </a>
          <a
            href="https://github.com/yourusername/expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg"
          >
            GitHub <Github className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Back */}
        <Link
          to="/"
          className="block mt-12 text-gray-600 hover:text-gray-900 underline"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  )
}

export default ExpenseTrackerPage
