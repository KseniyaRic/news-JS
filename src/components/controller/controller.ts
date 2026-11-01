import AppLoader from './appLoader';
import { SourcesResponse, NewsResponse, Endpoint } from '../../types';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void) {
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

    getNews(e: MouseEvent, callback: (data: NewsResponse) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
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
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
