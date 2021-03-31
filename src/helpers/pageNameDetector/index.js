
const PAGE_NAMES = [
    {
        pageName: "Home",
        title: "Ana Sayfa"
    },
    {
        pageName: "Products",
        title: "Ürünler"
    }
];

const pageNameDetector = (pageName) => {
    const pageNameFilter = PAGE_NAMES.filter((val) => val.pageName === pageName);
    const pageNameTitle = pageNameFilter.length !== 0 ? pageNameFilter[0].title : "";
    return pageNameTitle;
};

export default pageNameDetector;
