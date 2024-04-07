export const isValideAmazonURL = (url: string) => {
    const regex = /^(https?:\/\/)?(www\.)?amazon\.[a-z]{2,3}\/([a-zA-Z0-9-\/]+)\/dp\/([a-zA-Z0-9]+)(\/)?/;
    return regex.test(url);
};