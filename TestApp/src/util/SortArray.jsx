

export default SortArray = (array) => {
    if (array === undefined) {
        return [];
    } else {
        var list = [...array];
        list.sort((a, b) => (parseInt(a.rating) > parseInt(b.rating)) ? 1 : -1);
        return list;
    }

};