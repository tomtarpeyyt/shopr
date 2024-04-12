import { Nav, NavLink } from "@/components/nav";

export const dynamic = 'force-dynamic';

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
            <Nav>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/products'>Products</NavLink>
                <NavLink href='/orders'>My Orders</NavLink>
            </Nav>
            <div className="container my-6">{ children }</div>
        </>);
}