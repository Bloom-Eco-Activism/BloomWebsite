// components folder is where our react components will be stored (ex: navbar, footer). this lets us use them wherever throughout the project
import Link from 'next/link'

// the next component is the footer, for now its following the same style as the navbar
export default function Footer() {
    return(
       <nav>
        <ul>
            <li><Link href='/instagram'>Instgram</Link></li>
        </ul>
       </nav> 
    );
}