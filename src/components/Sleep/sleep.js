const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 400));
}

export default sleep;