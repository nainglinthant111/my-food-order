const blogData = [
    {
        url: "imageurl1",
        date: "January 3, 2023",
        description: "How to prepare a delicious gluten free sushi.",
    },
    {
        url: "imageurl2",
        date: "February 10, 2023",
        description: "10 tips for perfect homemade bread.",
    },
    {
        url: "imageurl3",
        date: "March 15, 2023",
        description: "Exploring the benefits of a vegan diet.",
    },
    {
        url: "imageurl4",
        date: "April 5, 2023",
        description: "The secrets to making creamy pasta sauce.",
    },
    {
        url: "imageurl5",
        date: "May 20, 2023",
        description: "5 healthy breakfast ideas to start your day.",
    },
    {
        url: "imageurl6",
        date: "June 1, 2023",
        description: "How to host the perfect backyard BBQ party.",
    },
    {
        url: "imageurl7",
        date: "July 14, 2023",
        description: "Understanding different coffee brewing methods.",
    },
    {
        url: "imageurl8",
        date: "August 9, 2023",
        description: "The art of plating: Tips from professional chefs.",
    },
    {
        url: "imageurl9",
        date: "September 18, 2023",
        description: "Making the perfect burger at home.",
    },
    {
        url: "imageurl10",
        date: "October 25, 2023",
        description: "The best seasonal fruits and how to use them.",
    },
    {
        url: "imageurl11",
        date: "November 30, 2023",
        description: "Creating delightful desserts for the holidays.",
    },
    {
        url: "imageurl12",
        date: "December 15, 2023",
        description: "Cooking with spices: A beginner's guide.",
    },
    {
        url: "imageurl13",
        date: "January 8, 2024",
        description: "The ultimate guide to meal prepping.",
    },
    {
        url: "imageurl14",
        date: "February 14, 2024",
        description: "Romantic dinner ideas for Valentine's Day.",
    },
    {
        url: "imageurl15",
        date: "March 22, 2024",
        description: "How to cook the perfect steak every time.",
    },
    {
        url: "imageurl16",
        date: "April 12, 2024",
        description: "5 smoothie recipes to boost your energy.",
    },
    {
        url: "imageurl17",
        date: "May 3, 2024",
        description: "The essentials of baking: Tools and techniques.",
    },
    {
        url: "imageurl18",
        date: "June 18, 2024",
        description: "Exploring world cuisines: A culinary journey.",
    },
    {
        url: "imageurl19",
        date: "July 28, 2024",
        description: "The benefits of incorporating superfoods in your diet.",
    },
    {
        url: "imageurl20",
        date: "August 16, 2024",
        description: "Mastering the art of sourdough bread baking.",
    },
];

function Pages() {
    return (
        <div className="blogPages p-5">
            <div className="text-center">
                <p>Our Blog & Articles</p>
                <small>
                    We consider all the drivers of change gives you the
                    components you need <br /> to change to create a truly
                    happens.
                </small>
            </div>
            <div className="row">
                {blogData.map((item, index) => (
                    <div
                        className="col-3 mt-2"
                        key={index}
                    >
                        <div className="card">
                            <img
                                src="../images/blog_image1.png"
                                className=""
                                alt="png"
                            />
                            <div className="card-body">
                                <small>{item.date}</small>
                                <br />
                                <span>{item.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pages;
