import logo from "../../assets/logo.png";
import chevronDown from "../../assets/chevronDown.png"
import badgeApple from "../../assets/badgeApple.png"
import badgeGoogle from "../../assets/badgeGoogle.png"


function Header() {
    return (
        <div className="header">
            <div className="leftNav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navItems">
                    <div className="headerItem">
                        <div className="label">About</div>
                    </div>
                    <div className="headerItem">
                        <div className="label">Products</div>
                    </div>
                    <div className="headerItem">
                        <div className="label">Pricing</div>
                    </div>
                    <div className="headerItem">
                        <div className="label">Blog</div>
                    </div>
                    <div className="headerItem">
                        <div className="label">Jobs</div>
                    </div>
                    <div className="headerItem">
                        <div className="label more">More <span className="chevronDown"><img src={chevronDown} alt="" /></span> </div>
                    </div>
                </div>
            </div>
            <div className="rightNav">
                <img className="badgeApple" src={badgeApple} alt="" />
                <img className="badgeGoogle" src={badgeGoogle} alt="" />
            </div>
        </div>
    );
  }
  
  export default Header;