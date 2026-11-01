import AppLoader from './appLoader';
import { SourcesResponse, NewsResponse, Endpoint, DataCallback } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: DataCallback<SourcesResponse>): void {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
                options: {
                    apiKey: process.env.API_KEY as string,
                },
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: DataCallback<NewsResponse>): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId)
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: Endpoint.Everything,
                                options: {
                                    sources: sourceId,
                                    apiKey: process.env.API_KEY as string,
                                },
                            },
                            callback
                        );
                    }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;
