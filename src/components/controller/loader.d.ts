import { LoaderOptions, DataCallback, RequestParams, HttpMethod } from '../../types';
declare class Loader {
    private readonly baseLink;
    private readonly options;
    constructor(baseLink: string, options: LoaderOptions);
    getResp<T>({ endpoint, options }: RequestParams, callback?: DataCallback<T>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: LoaderOptions, endpoint: string): string;
    load<T>(method: HttpMethod, endpoint: string, callback: DataCallback<T>, options: LoaderOptions): void;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map