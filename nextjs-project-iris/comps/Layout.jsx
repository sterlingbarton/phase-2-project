import OuterNav from "./NavbarOuter";
import InnerNav from "./NavbarInner";

function Layout({ children}) {
    return ( 
        <div>
            <OuterNav />
            <InnerNav />
            { children }
        </div>
     );
}

export default Layout;