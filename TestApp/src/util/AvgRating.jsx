

export default AvgRating = (ratings) => {


    if (ratings === undefined) {
        return 0;
    }

    var sum = 0;

    ratings.map((rating) => {
        sum += parseFloat(rating.rating);
    });


    return (sum / ratings.length).toFixed(1);
};