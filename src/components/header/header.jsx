import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/tic-tac-toe" className={({ isActive }) => (isActive ? "active" : undefined)}>Tic-tac-toe</NavLink>
                <NavLink to="/material" className={({ isActive }) => (isActive ? "active" : undefined)}>Material</NavLink>
                <NavLink to="/exercise" className={({ isActive }) => (isActive ? "active" : undefined)}>Exercise</NavLink>
            </nav>
        </header>
    )
}
