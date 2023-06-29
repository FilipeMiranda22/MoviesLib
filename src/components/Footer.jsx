import { FaGithub } from 'react-icons/fa'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <ul className="social-list">
                <li><a href='https://github.com/FilipeMiranda22/MoviesLib' target="_blank" rel="noreferrer"><FaGithub/></a></li>
            </ul>
            <p className="copy-right"><span>MoviesLib</span> &copy; 2023</p>
        </footer>
    </div>
  )
}

export default Footer