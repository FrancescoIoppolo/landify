import PhoneMockup from "../../assets/PhoneMockup.png"

function Content() {
    return (
        <>
            <div className="content">
                <h1>Organise projects. Get more done.</h1>
                <div className="button"><div>Get Started</div></div>
            </div>
            <div className="phoneMockup">
                <img src={PhoneMockup} alt="" />
            </div>
        </>
    );
  }
  
  export default Content;