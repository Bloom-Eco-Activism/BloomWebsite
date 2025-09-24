// components folder is where our react components will be stored (ex: navbar, footer). this lets us use them wherever throughout the project
import Link from 'next/link'

// the first component is the navbar, this is what goes across the top of every page. will be styled later
export default function Navbar() {
    return(
       <nav>
        <ul>
            <li><Link href='/community'>Community</Link></li>
            <li><Link href='/news'>News</Link></li>
            <li><Link href='/about'>About</Link></li>
        </ul>
       </nav> 
    );
}