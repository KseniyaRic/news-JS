import News from './news/news';
import Sources from './sources/sources';
import { Article, NewsResponse, Source, SourcesResponse } from '../../types';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsResponse) {
        const articles = data.articles ?? [];
        this.news.draw(articles);
    }

    drawSources(data: SourcesResponse) {
        const sources = data.sources ?? [];
        this.sources.draw(sources);
    }
}

export default AppView;
