const numberDivideder = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1'+".");
};

export default numberDivideder;