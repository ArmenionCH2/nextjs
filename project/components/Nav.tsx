import Link from "next/link";

export default function NavComp(){

    return(
        <nav>

            <Link href="/auth">Auth</Link>
            <Link href="/comments">Comments</Link>
            <Link href="/arrays">Arrays</Link>
        </nav>
    );
}