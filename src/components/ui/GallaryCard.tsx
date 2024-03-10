type propsValue = {
    color ?: string,
    img?: string
}
const GallaryCard = ({ img} : propsValue) => {
    return (
        <div className="my-10 min-w-[400px] bg-gray-300  rounded-lg ">
            <div className='flex h-full  gap-5 items-center '>
                <img src={img} className="w-full h-full" alt="" />
                
            </div>

        </div>
    );
};

export default GallaryCard;