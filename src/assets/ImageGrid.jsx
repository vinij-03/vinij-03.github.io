import React from 'react';

const ImageGrid = ({ images }) => {
    // Function to chunk the images array into groups of size 'size'
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    // Chunk the images array into groups of 3
    const imageChunks = chunkArray(images, 3);

    // Determine the number of rows to display on small screens
    const smallScreenRows = Math.floor(6 / 3);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center lg:px-44 ">
            {imageChunks.map((chunk, rowIndex) => {
                // Render the row only if it's within the small screen row limit
                if (rowIndex < smallScreenRows || window.innerWidth >= 640) {
                    return (
                        <div key={rowIndex} className="grid gap-4">
                            {chunk.map((imageUrl, colIndex) => (
                                <div key={`${rowIndex}-${colIndex}`}>
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src={imageUrl}
                                        alt="vineet jana"
                                    />
                                </div>
                            ))}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default ImageGrid;
