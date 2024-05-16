import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>  
                </ul>

            </div>

        </div>
    )
}

// const styleCard={
//     backgroundColor: "light"
// }

const RestoCard = (props) => {
    const{resName, cuisine}=props;
    return(
        <div className="res-card">
            <img 
              className="food-img"
              alt="food"
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5⭐</h4>
            <h4>30 minutes</h4>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestoCard
                  resName="Sagar Gaire"
                  cuisine="Kulcha Chicken, North Indian"
                />
                <RestoCard
                  resName="Dominos"
                  cuisine="Pizza, Italian"
                />
                <RestoCard
                  resName="KFC"
                  cuisine="Burger, Fast Food "
                />
                <RestoCard
                  resName="Tasty Resto"
                  cuisine="Hakka Noodles, Chinese Fast Food"
                />
                
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
