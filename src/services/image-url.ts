import noImage from '../assets/no-image-placeholder.webp';

const getImageUrl = (cover_i: string) => {
   if(cover_i === undefined) return noImage;
   return `http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
}
export default getImageUrl;