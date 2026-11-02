import AppLoader from './appLoader';
import { SourcesResponse, NewsResponse, DataCallback } from '../../types';
declare class AppController extends AppLoader {
    getSources(callback: DataCallback<SourcesResponse>): void;
    getNews(e: MouseEvent, callback: DataCallback<NewsResponse>): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map