import { getImageUrl } from "~/utils";

const initState = [
    {
        id: 0,
        logos: [],
        titles: {
            heading: "1",
            title: "Loremi iste dolorum? Blanditiis at suscipit dolor?",
            link: "https://my-app-huynhthuoc.vercel.app/",
        },
        banner: getImageUrl("imgapp/1.png"),
    },
    {
        id: 1,
        logos: [],
        titles: {
            heading: "2",
            title: "Lorem i amet consectetur, adipisicing elit. Repellat, tempore dignissimos. Doloribus, iusto error! Neque ad delectus quisquam? In veritatis, vero doloremero doloremque harum animi iste dolorum? Blanditiis at suscipit dolor?",
            link: "https://my-app-huynhthuoc.vercel.app/",
        },
        banner: getImageUrl("imgapp/2.png"),
    },
    {
        id: 2,
        logos: [],
        titles: {
            heading: "3",
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore dignissimos. Doloribus, iusto error! Neque ad delectus quisquam? In veritatis, vero doloremque harum animi iste dolorum? Blanditiis at suscipit dolor?",
            link: "https://my-app-huynhthuoc.vercel.app/",
        },
        banner: getImageUrl("imgapp/3.png"),
    },
    {
        id: 3,
        logos: [],
        titles: {
            heading: "4",
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore dignissimos. Doloribus, iusto error! Neque ad delectus quisquam? In veritatis, vero doloremque harum animi iste dolorum? Blanditiis at suscipit dolor?",
            link: "https://my-app-huynhthuoc.vercel.app/",
        },
        banner: getImageUrl("imgapp/4.png"),
    },
];

const reducer = function (state, action) {};

export default reducer;
export { initState };
