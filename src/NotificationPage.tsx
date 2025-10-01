import { Link } from "react-router-dom"
import { ExternalLink, Github } from "lucide-react"
import NotificationImg from "./assets/notificationImg.png"
import SendNotification from "./assets/Send Notification.png"

function NotificationPage() {
  return (
    <div className="w-full min-h-screen overflow-y-scroll p-10 flex justify-center">
      <div className="max-w-4xl w-full space-y-10">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900">Notification System</h1>

        {/* Screenshot */}
        <div className="flex justify-center">
          <img
            src={NotificationImg}
            alt="Expense Tracker Screenshot"
            className="rounded-2xl shadow-lg max-w-3xl w-full"
          />
        </div>

        {/* Explanation */}
        <div className="space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
            A real-time notification hub built with Go (Gin) and Redis, designed to deliver notifications instantly via WebSockets and REST APIs. The service is fully containerized with Docker, orchestrated with Docker Compose, and automated through a GitLab CI/CD pipeline that builds and ships Docker images to the GitLab Container Registry.
            Deployed on AWS EC2 with a static domain (notification.benexpense.lat) managed via Route 53, and secured with Caddy reverse proxy providing automatic HTTPS certificates through Let’s Encrypt.
            This project showcases full‑stack backend engineering and DevOps: from building APIs and real‑time event handling with Redis, to setting up CI/CD pipelines and production‑ready deployments on cloud infrastructure.
        </p>

        <ul className="list-disc pl-6 space-y-3">
            <li>
            <strong>Go backend service</strong> with Gin framework, exposing REST endpoints and WebSocket connections.
            </li>
            <li>
            <strong>Redis integration</strong> for message brokering, stream IDs, and real-time event delivery.
            </li>
            <li>
            Minimal <strong>HTML/JS client</strong> for live WebSocket testing with notification/acknowledge flow.
            </li>
            <li>
            <li>
               <strong>Health check endpoints</strong> form monitoring ( /heatlhz ) 
            </li>
            <strong>Docker & Docker Compose</strong> setup for reproducible builds and multi-service orchestration.
            </li>
            <li>
            <strong>GitLab CI/CD pipeline</strong> that builds and pushes Docker images to GitLab Container Registry.
            </li>
            <li>
            <strong>AWS EC2 deployment</strong> with Elastic IP + Route 53 DNS for stable custom domain mapping.
            </li>
            <li>
                <strong>Caddy reverse proxy</strong> handling TLS termination, HTTP→HTTPS redirects, and automatic cerificate renewal.
            </li>
        </ul>

                {/* Screenshot */}
        <div className="flex justify-center">
          <img
            src={SendNotification}
            alt="Expense Tracker Screenshot"
            className="rounded-2xl shadow-lg max-w-3xl w-full"
          />
        </div>

        <ul className="list-disc pl-6 space-y-3">
            <li>
                <strong>Language</strong> Go(Gin)
            </li>
            <li>
                <strong>Database/Message Broker</strong> Redis
            </li>
            <li>
                <strong>Infra</strong> Docker, Docker Compose, GitLab CI/CD
            </li>
            <li>
                <strong>Cloud</strong> AWS EC2, Route 53
            </li>
            <li>
                <strong>Reverse Proxy/Security</strong> Caddy with Let's Encrypt
            </li>
        </ul>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://notification.benexpense.lat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-lg"
          >
            Live Demo <ExternalLink className="w-5 h-5 ml-2" />
          </a>
          <a
            href="https://github.com/LuisBAndrade/notify"
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

export default NotificationPage
