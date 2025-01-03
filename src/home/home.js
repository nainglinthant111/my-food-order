import HeroSession from "./heroSession";
import AboutContent from "../about/abount_content";
import MenuTypeCard from "../common/cardSession";
import ServiceSession from "./serviceSession";
import DeliverySession from "./deliverySession";
import CustomerSession from "./customerSession";
import BlogSection from "./blogSection";

const menuCard = [
    {
        cardLogo: "../images/category1.svg",
        cardTitle: "Breakfast",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "/menu?type=Breakfast",
    },
    {
        cardLogo: "../images/category2.svg",
        cardTitle: "Main Dishes",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "/menu?type=Main Dishes",
    },
    {
        cardLogo: "../images/category3.svg",
        cardTitle: "Drinks",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "/menu?type=Drinks",
    },
    {
        cardLogo: "../images/category4.svg",
        cardTitle: "Desserts",
        cardDescription:
            "In the new era of technology we look in the future with certainty and pride for our life.",
        cardLink: "/menu?type=Desserts",
    },
];
const serviceCard = [
    {
        image: "../images/service1.png",
        title: "Caterings",
        description:
            "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
        image: "../images/service2.png",
        title: "Birthdays",
        description:
            "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
        image: "../images/service3.png",
        title: "Weddings",
        description:
            "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
        image: "../images/service4.png",
        title: "Events",
        description:
            "In the new era of technology we look in the future with certainty and pride for our life.",
    },
];
const customerCard = [
    {
        title: "The best restaurant",
        description:
            "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        image: "../images/customer1.png",
        name: "Sophire Robson",
        address: "Los Angeles, CA",
    },
    {
        title: "Simply delicious",
        description:
            "LPlace exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        image: "../images/customer2.png",
        name: "Matt Cannon",
        address: "San Diego, CA",
    },
    {
        title: "One of a kind restaurant",
        description:
            "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        image: "../images/customer3.png",
        name: "Andy Smith",
        address: "San Francisco, CA",
    },
];
const blogCard = [
    {
        image: "../images/blog_image1.png",
        date: "January 3, 2023",
        description1:
            "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
        description2:
            "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
    },
    {
        image: "../images/blog_image2.png",
        date: "January 3, 2023",
        description1: "How to prepare the perfect french fries in an air fryer",
        description2: "",
    },
    {
        image: "../images/blog_image3.png",
        date: "January 3, 2023",
        description1: "How to prepare delicious chicken tenders",
        description2: "",
    },
    {
        image: "../images/blog_image4.png",
        date: "January 3, 2023",
        description1: "7 delicious cheesecake recipes you can prepare",
        description2: "",
    },
    {
        image: "../images/blog_image5.png",
        date: "January 3, 2023",
        description1: "5 great pizza restaurants you should visit this city",
        description2: "",
    },
];

function Home() {
    return (
        <>
            <HeroSession />
            <div className="row menuTypeCard pt-5">
                <h1 className="text-center">Browse Our Menu</h1>
                <div className="mt-3">
                    <MenuTypeCard card={menuCard} />
                </div>
            </div>
            <div>
                <AboutContent button="Ok" />
            </div>
            <div>
                <ServiceSession serviceCard={serviceCard} />
            </div>
            <div>
                <DeliverySession />
            </div>
            <div>
                <CustomerSession customerCard={customerCard} />
            </div>
            <div>
                <BlogSection blogCard={blogCard} />
            </div>
        </>
    );
}

export default Home;
