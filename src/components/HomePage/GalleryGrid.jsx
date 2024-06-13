import ImageGrid from "../../assets/ImageGrid";

const GalleryGrid = () => {
    const images = [
        'img/Vineet jana 1.jpg',
        'img/Vineet jana 2.jpg',
        'img/Vineet jana 3.jpg',
        'img/Vineet jana 4.jpg',
        'img/Vineet jana 5.jpg',
        'img/Vineet jana 6.jpg',
        'img/Vineet jana 7.jpg',
        'img/Vineet jana 8.jpg',
        'img/Vineet jana 9.jpg',
       
        // Add more image URLs as needed
    ];
    return (
        <div>
            <div className="text-white px-6 lg:pb-16 lg:px-28 justify-center mt-8">
                A little collection of my favorite images from different events I took part and places I visited. I hope you like them! 📸
            </div>
            <div className=" min-h-screen flex justify-center align-center px-6 md:px-16 ">
                {/* <h1 className="text-3xl font-bold text-center my-8">Image Grid Gallery</h1> */}
                <ImageGrid images={images} />
            </div>
        </div>
    );
};

export default GalleryGrid;
