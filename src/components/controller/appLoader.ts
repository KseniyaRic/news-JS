import Loader from './loader';

const baseLink =
    process.env.NODE_ENV === 'development' ? 'https://newsapi.org/v2/' : 'https://rss-news-api.onrender.com/';

class AppLoader extends Loader {
    constructor() {
        super(baseLink, {
            apiKey: process.env.API_KEY as string,
        });
    }
}

export default AppLoader;
