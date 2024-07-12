import Loading from '@/components/Loading';
import { loader as loaderDefaultOptions } from '@/config';
import asyncComponentLoader from './loader';
const configuredAsyncComponentLoader = (loadComponent, additionalProps = {}, loaderOptions = loaderDefaultOptions, FallbackWaiting = Loading) => asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting);
export { loaderDefaultOptions };
export default configuredAsyncComponentLoader;
