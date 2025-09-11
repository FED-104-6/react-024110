import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/tic-tac-toe" className={({ isActive }) => (isActive ? "active" : undefined)}>Tic-tac-toe</NavLink>
                <NavLink to="/material" className={({ isActive }) => (isActive ? "active" : undefined)}>Material</NavLink>
                <NavLink to="/count" className={({ isActive }) => (isActive ? "active" : undefined)}>Count</NavLink>
                <NavLink to="/response" className={({ isActive }) => (isActive ? "active" : undefined)}>Response</NavLink>
                <NavLink to="/conditional" className={({ isActive }) => (isActive ? "active" : undefined)}>Conditional</NavLink>
                <NavLink to="/diy" className={({ isActive }) => (isActive ? "active" : undefined)}>DIY</NavLink>
            </nav>
        </header>
    )
}
