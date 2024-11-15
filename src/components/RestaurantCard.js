import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId, 
        name, 
        avgRating, 
        cuisines, 
        costForTwo, 
        deliveryTime  
    } = resData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;
        console.log(resData);

        console.log(cloudinaryImageId);
        console.log(name);



    return (
        <div className="res-card" style={styleCard}>

            <img className="res-logo" src={CDN_URL +
                cloudinaryImageId}
            />

            <div className="Names">

                <h4> {name}</h4>
                <h4> {avgRating}</h4>
                <h6> {cuisines.join(",")}</h6>
                <h6> {costForTwo}</h6>
                <h6> {deliveryTime} minutes</h6>


            </div>

        </div>
    );
};
export default RestaurantCard;