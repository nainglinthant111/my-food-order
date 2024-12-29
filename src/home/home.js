import HeroSession from "./heroSession";
import MenuTypeCard from "../common/cardSession";
import AboutContent from "../about/abount_content";
const menuCard = [
    {
        cardLogo: "../images/category1.svg",
        cardTitle: "Breakfast",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "https://www.catho.com",
    },
    {
        cardLogo: "../images/category2.svg",
        cardTitle: "Main Dishes",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "https://www.catho.com",
    },
    {
        cardLogo: "../images/category3.svg",
        cardTitle: "Drinks",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "https://www.catho.com",
    },
    {
        cardLogo: "../images/category4.svg",
        cardTitle: "Desserts",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "https://www.catho.com",
    },
];
console.log("cathoCard", menuCard);

function Home() {
    return (
        <>
            <HeroSession />
            <div className="row menuTypeCard pt-5">
                <h1 className="text-center">Browse Our Menu</h1>
                <div className="mt-3">
                    <MenuTypeCard card={menuCard} />
                </div>
                <div>
                    <AboutContent button="Ok" />
                </div>
            </div>
        </>
    );
}

export default Home;
