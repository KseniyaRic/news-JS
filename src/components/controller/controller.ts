import AppLoader from './appLoader';
import { SourcesResponse, NewsResponse } from '../../types';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void) {
        super.getResp(
            {
                endpoint: 'mocks/sources',
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
                            endpoint: 'mocks/everything',
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
