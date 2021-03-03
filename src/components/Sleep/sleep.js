const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 100));
}

export default sleep;