const getAmazonUrl = (id_amazon: string[]) => {
   if(id_amazon === undefined || id_amazon.length === 0) return "";
   return `https://www.amazon.com/dp/${id_amazon[0]}`;
}
export default getAmazonUrl;